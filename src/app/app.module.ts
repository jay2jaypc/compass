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

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'savings', component: SavingTypeComponent},
  { path: 'amount', component: SavingAmountComponent},
  { path: 'confirm/:savings', component: FinalSavingsComponent},
  { path: 'cashflow/:savings', component: CashFlowComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SavingTypeComponent,
    SavingAmountComponent,
    FinalSavingsComponent,
    CashFlowComponent,
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
