import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../Product';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription: Subscription;
  constructor(private dataService: DataService) {
    this.dataService.fetchProducts();
    this.subscription = this.dataService.products$.subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
