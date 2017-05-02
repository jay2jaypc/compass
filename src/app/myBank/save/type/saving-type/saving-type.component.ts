import { Component, OnInit } from '@angular/core';
import { Save } from './save';


@Component({
  selector: 'app-saving-type',
  templateUrl: './saving-type.component.html',
  styleUrls: ['./saving-type.component.css']
})

export class SavingTypeComponent implements OnInit {
  types = [
    new Save('Home'),
    new Save('Car'),
    new Save('College'),
    new Save('A Man Cave'),
    new Save('The Future')
  ];

  constructor() { }

  ngOnInit() {

  }

}
