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

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'savings', component: SavingTypeComponent},
  { path: 'amount', component: SavingAmountComponent},
  // { path: 'confirm', component: FinalSavingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SavingTypeComponent,
    SavingAmountComponent,
    FinalSavingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true})
  ],
  bootstrap: [
    AppComponent,
    FinalSavingsComponent
  ]
})
export class AppModule {}
