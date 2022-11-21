import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Product';
import { DataService } from '../data.service';
@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.css'],
})
export class CatItemComponent implements OnInit {
  @Input()
  product!: Product;
  @Output() priceChange: EventEmitter<Map<number, number>> = new EventEmitter();

  amount: number = 1;
  itemPrice: number = 0;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.amount = Number(this.dataService.productAmount.get(this.product.id));
    this.itemPrice = this.product.price * this.amount;
    this.dataService.saveTotal(this.product.id, this.itemPrice);
    this.priceChange.emit();
  }

  deleteItem(product: Product) {
    this.dataService.deleteItem(product);
    this.priceChange.emit();
  }
  change(amount: number) {
    this.dataService.productAmount.set(this.product.id, amount);
    this.amount = Number(this.dataService.productAmount.get(this.product.id));
    this.itemPrice = this.product.price * this.amount;

    this.dataService.saveTotal(this.product.id, this.itemPrice);
    this.priceChange.emit();
  }
}
