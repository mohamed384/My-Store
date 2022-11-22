import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service';

import { Product } from '../Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  dataCart: Product[] = [];
  total: number = 0;
  productsAmount = new Map<number, number>([]);
  amount: number = 1;
  totalMap = new Map<number, number>([]);

  constructor(private cartService: CartService) {
    this.dataCart = this.cartService.cartProduct;
    this.totalMap = this.cartService.total;

    this.total = 0;
    this.totalMap.forEach((value) => {
      this.total += value;
    });
    this.total = +this.total.toFixed(2);
    this.cartService.finalprice = this.total;
  }

  ngOnInit(): void {}

  priceItem() {
    this.totalMap = this.cartService.total;
    this.total = 0;
    this.totalMap.forEach((value) => {
      this.total += value;
    });
    this.total = +this.total.toFixed(2);
    this.cartService.finalprice = this.total;
  }
}
