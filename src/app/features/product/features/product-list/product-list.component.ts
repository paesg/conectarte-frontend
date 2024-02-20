import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Subject, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList: Product[] = [];

  subject = new Subject<void>();

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(takeUntil(this.subject))
      .subscribe({
        next: (list) => (this.productList = list),
      });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }
}
