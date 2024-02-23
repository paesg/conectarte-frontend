import { CommonModule } from '@angular/common';
import { Seller } from './../../models/seller.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() seller!: Seller;

  contactSeller(seller: Seller): void {
    const message = encodeURIComponent(
      'Olá, vi o seu perfil no ContactArte e achei interessante!'
    );

    const phone = this.sanitizeSellerPhone(seller.phone_number);

    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`);
  }

  sanitizeSellerPhone(phoneNumber: string): string {
    return phoneNumber
      .replace('+', '')
      .replace(/\s/g, '')
      .replace('-', '')
      .replace(/[()]/g, '')
      .replace(/[A-Za-z]/g, '')
      .trim();
  }
}
