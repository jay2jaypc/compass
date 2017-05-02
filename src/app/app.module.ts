import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './myBank/home/home.component';
import { SavingTypeComponent } from './myBank/save/type/saving-type/saving-type.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'savings', component: SavingTypeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SavingTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
