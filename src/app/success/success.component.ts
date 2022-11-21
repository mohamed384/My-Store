import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  nameForm: string = '';
  finalprice: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.nameForm = this.dataService.nameForm;
    this.finalprice = this.dataService.finalprice;
  }
  activeProduct() {
    this.dataService.activeProductNavBar();
  }
}
