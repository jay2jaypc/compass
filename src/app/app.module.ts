import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './myBank/home/home.component';
import { SavingTypeComponent } from './myBank/save/type/saving-type/saving-type.component';

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
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
