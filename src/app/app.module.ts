import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoldPriceComponent } from './gold-price/gold-price.component';
import { DollarPriceComponent } from './dollar-price/dollar-price.component';
import { EuroPriceComponent } from './euro-price/euro-price.component';
import { PriceComponent } from './price/price.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    GoldPriceComponent,
    DollarPriceComponent,
    EuroPriceComponent,
    PriceComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
