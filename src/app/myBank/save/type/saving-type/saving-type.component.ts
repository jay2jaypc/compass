import { Component, OnInit } from '@angular/core';
import { Save } from './save';


@Component({
  selector: 'app-saving-type',
  templateUrl: './saving-type.component.html',
  styleUrls: ['./saving-type.component.css']
})

export class SavingTypeComponent implements OnInit {
  types = [
    new Save('Retirement'),
    new Save('Goal'),
    new Save('Start Saving'),
  ];

  constructor() { }

  ngOnInit() {

  }

}
