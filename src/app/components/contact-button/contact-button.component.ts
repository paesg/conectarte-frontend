import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-button.component.html',
  styleUrl: './contact-button.component.scss',
})
export class ContactButtonComponent {
  @Input()
  buttonLabel!: string;

  @Input()
  phone!: string;

  @Input()
  message = 'Olá, vi o seu perfil no ContactArte e achei interessante!';

  contactSeller(phone: string, message = this.message): void {
    const encodedMessage = encodeURIComponent(message);
    const sanitizedPhone = this.sanitizeSellerPhone(phone);

    window.open(
      `https://api.whatsapp.com/send?phone=${sanitizedPhone}&text=${encodedMessage}`
    );
  }

  sanitizeSellerPhone(phoneNumber: string): string {
    return phoneNumber
      .replaceAll('+', '')
      .replaceAll(' ', '')
      .replaceAll('.', '')
      .replaceAll('-', '')
      .replace(/[()]/g, '')
      .replace(/[A-Za-z]/g, '')
      .trim();
  }
}
