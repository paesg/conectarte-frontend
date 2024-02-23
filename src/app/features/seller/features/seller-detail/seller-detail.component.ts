import { Component, Input } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { Seller } from '../../models/seller.model';

@Component({
  selector: 'app-seller-detail',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './seller-detail.component.html',
  styleUrl: './seller-detail.component.scss',
})
export class SellerDetailComponent {
  @Input() sellerId!: string;

  seller!: Seller;

  constructor(private readonly sellerService: SellerService) {}

  ngOnInit(): void {
    if (this.sellerId) {
      this.getSeller(this.sellerId);
    } else {
      console.error('Property "sellerId" should be defined!');
    }
  }

  getSeller(sellerId: string) {
    this.sellerService
      .get(sellerId)
      .subscribe((seller) => (this.seller = seller));
  }
}
