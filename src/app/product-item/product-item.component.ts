import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../Product';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!: Product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  amount: number = 1;
  getAmount(i: number): void {
    this.amount = i;
  }
  setProductCart(product: Product) {
    this.cartService.setProductCart(product, this.amount);
  }
}
