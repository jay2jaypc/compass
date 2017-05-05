import { Component, OnInit } from '@angular/core';
import { Response } from './response';

@Component({
  selector: 'app-link-accounts',
  templateUrl: './link-accounts.component.html',
  styleUrls: ['./link-accounts.component.css']
})
export class LinkAccountsComponent implements OnInit {
  showContinue: boolean;
  showAccounts: boolean;
  answers = [
    new Response('Choose One'),
    new Response('Yes'),
    new Response('No')
  ];
  constructor() { }

  ngOnInit() {
  }

  onChLinks(index) {
    if (index === 0) {
      this.showContinue = false;
      this.showAccounts = false;
    } else if (index === 1) {
      this.showAccounts = true;
      this.showContinue = false;
    } else {
      this.showAccounts = false;
      this.showContinue = true;
    }
  }

}
