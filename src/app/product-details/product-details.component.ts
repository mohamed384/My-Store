import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  routerSubscription: Subscription;
  serviceSubscription: Subscription;
  productId!: number;
  product!: Product;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.routerSubscription = this.route.params.subscribe((params) => {
      this.productId = +params['id'];
    });
    this.serviceSubscription = this.dataService.products$.subscribe(
      (products) => {
        if (this.productId === undefined) return;

        const product = products.find(
          (product) => product.id === this.productId
        );
        if (!product) {
          return;
        }
        this.product = product!;
      }
    );
  }
  data: any;
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }
  amount: number = 1;
  getAmount(i: number): void {
    this.amount = i;
  }
  setProductCart(product: Product) {
    this.dataService.setProductCart(product, this.amount);
  }
}
