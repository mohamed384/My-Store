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

  cartProduct: Product[] = [];
  productAmount = new Map<number, number>([]);
  setProductCart(product: Product, amount: number) {
    if (!this.productAmount.has(product.id)) {
      this.cartProduct.push(product);
      this.productAmount.set(product.id, amount);
      this.saveTotal(product.id, product.price);
      alert('Added To Cart!');
    } else {
      return;
    }
  }
  total = new Map<number, number>([]);
  saveTotal(id: number, price: number) {
    this.total.set(id, price);
  }

  deleteItem(product: Product) {
    const index = this.cartProduct.findIndex((t) => t.id === product.id);
    this.cartProduct.splice(index, 1);
    this.productAmount.delete(product.id);
    this.total.delete(product.id);
    alert('product deleted');
  }
  nameForm: string = '';
  finalprice: number = 0;
  saveForm(name: string) {
    this.nameForm = name;
  }
}
