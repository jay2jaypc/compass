import { Component, OnInit } from '@angular/core';
import { Save } from './save';


@Component({
  selector: 'app-saving-type',
  templateUrl: './saving-type.component.html',
  styleUrls: ['./saving-type.component.css']
})

export class SavingTypeComponent implements OnInit {
  showSave: boolean;
  showAdditional;
  types = [
    new Save('Choose One'),
    new Save('Savings Goal'),
    new Save('Retirement'),
  ];

  goals = [
    new Save('Choose One'),
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
      this.showSave = false;
      this.showAdditional = false;
    }else if (index === 2) {
      this.showAdditional = false;
      this.showSave = true;
    } else {
      this.showAdditional = true;
      this.showSave = false;
    }
  }
  onSubChange(index) {
    if (index === 0) {
      this.showSave = false;
    } else {
      this.showSave = true;
    }
  }
  eventHandler(savingsName) {
    if (savingsName.isEmpty()) {
      this.showSave = false;
    } else {
      this.showSave = true;
    }
  }


}
