import { Injectable } from '@angular/core';
import { Product } from './Product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

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
  total = new Map<number, number>([]);
  saveTotal(id: number, price: number) {
    this.total.set(id, price);
  }
}
