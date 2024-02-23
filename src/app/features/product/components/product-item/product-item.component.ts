import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NG_VALIDATORS, NgModel } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product!: Product;
}
