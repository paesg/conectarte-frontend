import { CommonModule } from '@angular/common';
import { Seller } from './../../models/seller.model';
import { Component, Input } from '@angular/core';
import { ContactButtonComponent } from '../../../../components/contact-button/contact-button.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, ContactButtonComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input()
  seller!: Seller;

  @Input()
  showDescription = true;
}
