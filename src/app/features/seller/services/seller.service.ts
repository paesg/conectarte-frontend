import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seller } from '../models/seller.model';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private readonly http: HttpClient) {}

  get(id: string): Observable<Seller> {
    return this.http.get<Seller>(`${environment.apiUrl}/seller/${id}`);
  }
}
