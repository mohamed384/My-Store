import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products: Product[] = [];
  products$ = new BehaviorSubject<Product[]>(this.products);
  constructor(private http: HttpClient) {}

  activeProductNavBar(): void {
    if (document.querySelector('ul:nth-child(1) a')?.className !== 'active') {
      document
        .querySelector('ul li:nth-child(2) a')
        ?.classList.remove('active');
      document.querySelector('ul li:nth-child(1) a')?.classList.add('active');
    }
  }

  activeCartNavBar(): void {
    if (
      document.querySelector('ul li:nth-child(2) a')?.className !== 'active'
    ) {
      document
        .querySelector('ul li:nth-child(1) a')
        ?.classList.remove('active');
      document.querySelector('ul li:nth-child(2) a')?.classList.add('active');
    }
  }
  fetchProducts() {
    const subscription = this.http
      .get<Product[]>('/assets/data.json')
      .subscribe((Products) => {
        this.products = Products;
        this.products$.next(this.products);
        subscription.unsubscribe();
      });
  }
}
