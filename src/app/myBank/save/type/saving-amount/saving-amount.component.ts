import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saving-amount',
  templateUrl: './saving-amount.component.html',
  styleUrls: ['./saving-amount.component.css']
})
export class SavingAmountComponent implements OnInit {
  amount: number;
  constructor(
    private router: Router) { }
  ngOnInit() {

  }
 sendInfo(value: number): void {
   this.router.navigate(['/confirm', value]);
 }
}
