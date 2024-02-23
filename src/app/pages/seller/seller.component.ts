import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SellerDetailComponent } from '../../features/seller/features/seller-detail/seller-detail.component';

@Component({
  selector: 'app-seller',
  standalone: true,
  imports: [SellerDetailComponent],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.scss',
})
export class SellerComponent implements OnInit, OnDestroy {
  sellerId!: string;

  subject = new Subject<void>();

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getSellerIdFromUrl();
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  getSellerIdFromUrl(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.subject)).subscribe({
      next: (value) => {
        const sellerId = value.get('id');

        if (sellerId) this.sellerId = sellerId;
      },
    });
  }
}
