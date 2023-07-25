import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceComponent } from './price/price.component';
import { DollarPriceComponent } from './dollar-price/dollar-price.component';
import { EuroPriceComponent } from './euro-price/euro-price.component';
import { GoldPriceComponent } from './gold-price/gold-price.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gold', component: GoldPriceComponent },
  { path: 'dollar', component: DollarPriceComponent },
  { path: 'euro', component: EuroPriceComponent },
  // Eğer tanımlanmayan bir yol girilirse ana sayfaya yönlendirilsin:
  { path: '**', redirectTo: '/price', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
