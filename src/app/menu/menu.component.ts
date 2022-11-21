import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  @Output() iEvent: EventEmitter<number> = new EventEmitter();

  value: number = 1;
  getmenu(value: String): void {
    this.value = Number(value);
    this.iEvent.emit(this.value);
  }
  ngOnInit(): void {}
}
