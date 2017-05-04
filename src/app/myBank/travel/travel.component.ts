import { Component, OnInit } from '@angular/core';
import { Options } from './options';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  travelOptions = [
    new Options('Planning to Travel Abroad?'),
    new Options('Traveling Tips & Benefits'),
    new Options('Exchange Rates'),
    new Options('Using your Debit/Credit Cards Abroad')
  ];
  constructor() { }

  ngOnInit() {
  }



}
