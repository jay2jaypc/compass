import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-saving-amount',
  templateUrl: './saving-amount.component.html',
  styleUrls: ['./saving-amount.component.css']
})
export class SavingAmountComponent implements OnInit {
  amount: number;
  constructor(
    private router: Router) { }
  OnInit() {

  }
 doSubmit(form: NgForm): void {
   this.router.navigate(['/confirm', form.value]);
 }

}
