import { Seller } from '../../seller/models/seller.model';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  seller: Seller;
  updatedAt: string;
  createdAt: string;
}
