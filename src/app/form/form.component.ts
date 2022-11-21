import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myform = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    credit: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
    ]),
  });
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}
  submit() {
    if (this.myform.invalid) return;
    this.dataService.saveForm(String(this.myform.controls.fname.value));
    this.router.navigate(['/success']);
    this.myform.reset();
  }
}
