import { Component } from '@angular/core';
import { ProductListComponent } from '../../features/product/features/product-list/product-list.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {}
