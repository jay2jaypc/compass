import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './myBank/home/home.component';
import { SavingTypeComponent } from './myBank/save/type/saving-type/saving-type.component';
import { SavingAmountComponent } from './myBank/save/type/saving-amount/saving-amount.component';
import { FinalSavingsComponent } from './myBank/final/final-savings/final-savings.component';
import { CashFlowComponent } from './myBank/save/type/cash-flow/cash-flow.component';
import { PilotComponent } from './myBank/pilot/pilot.component';
import { Home2Component } from './myBank/home2/home2.component';
import { TravelComponent } from './myBank/travel/travel.component';
import { LinkAccountsComponent } from './myBank/link-accounts/link-accounts.component';

const appRoutes: Routes = [
  { path: 'welcome', component: HomeComponent},
  { path: 'savings', component: SavingTypeComponent},
  { path: 'amount', component: SavingAmountComponent},
  { path: 'confirm/:savings', component: FinalSavingsComponent},
  { path: 'cashflow', component: CashFlowComponent},
  { path: 'pilot', component: PilotComponent},
  { path: 'welcomeBack', component: Home2Component},
  { path: 'link', component: LinkAccountsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    SavingTypeComponent,
    SavingAmountComponent,
    FinalSavingsComponent,
    CashFlowComponent,
    PilotComponent,
    TravelComponent,
    LinkAccountsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true})
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
