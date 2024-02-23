import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input()
  list!: Product[];

  subject = new Subject<void>();

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    if (!this.list) this.getProducts();
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .pipe(takeUntil(this.subject))
      .subscribe({
        next: (list) => (this.list = list),
      });
  }
}
