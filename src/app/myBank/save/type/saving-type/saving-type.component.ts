import { Component, OnInit } from '@angular/core';
import { Save } from './save';


@Component({
  selector: 'app-saving-type',
  templateUrl: './saving-type.component.html',
  styleUrls: ['./saving-type.component.css']
})

export class SavingTypeComponent implements OnInit {
  types = [
    new Save('Choose One'),
    new Save('Savings Goal'),
    new Save('Retirement'),
  ];

  goal = [
    new Save('Home'),
    new Save('Car'),
    new Save('Higher Education'),
    new Save('Business'),
    new Save('Vacation')
  ];

  constructor() { }

  ngOnInit() {

  }

}
