import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductDetailComponent } from '../../../../features/product/features/product-detail/product-detail.component';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent implements OnInit, OnDestroy {
  private subject = new Subject<void>();

  productId!: string;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProductDetailfromUrl();
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  getProductDetailfromUrl(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.subject)).subscribe({
      next: (value) => {
        const productId = value.get('id');

        if (productId) this.productId = productId;
      },
    });
  }
}
