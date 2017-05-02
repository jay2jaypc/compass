import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-final-savings',
  templateUrl: './final-savings.component.html',
  styleUrls: ['./final-savings.component.css']
})
export class FinalSavingsComponent implements  OnInit {

  info: {total: number};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.info = {
      total: this.route.snapshot.params['total']
    };
  }

}
