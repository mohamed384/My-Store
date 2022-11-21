import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  activeProduct(): void {
    this.dataService.activeProductNavBar();
  }
  activeCart(): void {
    this.dataService.activeCartNavBar();
  }
}
