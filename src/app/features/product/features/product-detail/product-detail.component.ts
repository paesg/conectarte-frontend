import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserCardComponent } from '../../../seller/components/user-card/user-card.component';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ContactButtonComponent } from '../../../../components/contact-button/contact-button.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductItemComponent,
    UserCardComponent,
    ContactButtonComponent,
    RouterLink,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private subject = new Subject<void>();

  @Input()
  productId!: string;

  product!: Product;

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.getProductDetail();

    // TODO: render product detail injecting product item component
  }

  private getProductDetail() {
    this.productService
      .getProductById(this.productId)
      .pipe(takeUntil(this.subject))
      .subscribe({
        next: (product: Product) => (this.product = product),
      });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }
}
