import { Component } from '@angular/core';
import { ProductListComponent } from '../../features/product/features/product-list/product-list.component';
import { UserCardComponent } from '../../features/seller/components/user-card/user-card.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ProductListComponent, UserCardComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {}
