import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { closeWindow } from './close';
import { WindowRef } from './WindowRef';

@Component({
  selector: 'app-final-savings',
  templateUrl: './final-savings.component.html',
  styleUrls: ['./final-savings.component.css']
})

export class FinalSavingsComponent implements OnInit {
    data: {savings: number};
  constructor(private route: ActivatedRoute, private winRef: WindowRef) { }

  ngOnInit() {
    this.data = {
      savings: this.route.snapshot.params['savings']
    };
  }
   closeWindow(): static {
    window.close();
  }
}


