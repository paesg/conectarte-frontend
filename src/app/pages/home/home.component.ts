import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PrincipalCardComponent } from '../../components/principal-card/principal-card.component';
import { ProductListComponent } from '../../features/product/features/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterModule,
    CardComponent,
    PrincipalCardComponent,
    ProductListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
