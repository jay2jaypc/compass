import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-final-savings',
  templateUrl: './final-savings.component.html',
  styleUrls: ['./final-savings.component.css']
})

export class FinalSavingsComponent implements OnInit {
    data: {savings: number};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = {
      savings: this.route.snapshot.params['savings']
    };
  }
   closeWindow(): static {
    window.close();
  }
}


