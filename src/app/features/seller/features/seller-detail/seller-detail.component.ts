import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductListComponent } from '../../../product/features/product-list/product-list.component';
import { Product } from '../../../product/models/product.model';
import { ProductService } from '../../../product/services/product.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { Seller } from '../../models/seller.model';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-seller-detail',
  standalone: true,
  imports: [UserCardComponent, ProductListComponent],
  templateUrl: './seller-detail.component.html',
  styleUrl: './seller-detail.component.scss',
})
export class SellerDetailComponent implements OnInit, OnDestroy {
  private subject = new Subject<void>();

  @Input() sellerId!: string;

  sellerProducts: Product[] = [];
  seller!: Seller;

  constructor(
    private readonly sellerService: SellerService,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {
    if (this.sellerId) {
      this.getSeller(this.sellerId);
      this.getSellerProducts(this.sellerId);
    } else {
      console.error('Property "sellerId" should be defined!');
    }
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  getSeller(sellerId: string) {
    this.sellerService
      .get(sellerId)
      .pipe(takeUntil(this.subject))
      .subscribe((seller) => (this.seller = seller));
  }

  getSellerProducts(sellerId: string) {
    this.productService
      .getProductsBySellerId(sellerId)
      .pipe(takeUntil(this.subject))
      .subscribe({
        next: (products) => (this.sellerProducts = products),
      });
  }
}
