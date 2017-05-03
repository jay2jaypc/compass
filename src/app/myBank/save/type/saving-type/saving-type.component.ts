import { Component, OnInit } from '@angular/core';
import { Save } from './save';


@Component({
  selector: 'app-saving-type',
  templateUrl: './saving-type.component.html',
  styleUrls: ['./saving-type.component.css']
})

export class SavingTypeComponent implements OnInit {
  show: boolean;
  showAdditional:
  types = [
    new Save('Choose One'),
    new Save('Savings Goal'),
    new Save('Retirement'),
  ];

  goals = [
    new Save('Home'),
    new Save('Car'),
    new Save('Higher Education'),
    new Save('Business'),
    new Save('Vacation')
  ];

  constructor() { }

  ngOnInit() {

  }
  onChange(index) {
    if (index === 0) {
      this.show = false;
      this.showAdditional = false;
    }else if (index === 2) {
      this.showAdditional = false;
      this.show = true;
    } else {
      this.show = true;
      this.showAdditional = true;
    }
  }

}
