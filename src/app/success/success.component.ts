import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  nameForm: string = '';
  finalprice: number = 0;

  constructor(
    private CartService: CartService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.nameForm = this.CartService.nameForm;
    this.finalprice = this.CartService.finalprice;
  }
  activeProduct() {
    this.dataService.activeProductNavBar();
  }
}
