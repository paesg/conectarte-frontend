import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { PrincipalCardComponent } from '../../components/principal-card/principal-card.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterModule,
    CardComponent,
    PrincipalCardComponent,
    GalleryComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent { }
