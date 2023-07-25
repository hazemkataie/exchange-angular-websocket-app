import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  redirectToGold() {
    this.router.navigateByUrl('/gold'); // Gold sayfasına yönlendir
  }

  redirectToDollar() {
    this.router.navigateByUrl('/dollar'); // Dollar sayfasına yönlendir
  }

  redirectToEuro() {
    this.router.navigateByUrl('/euro'); // Euro sayfasına yönlendir
  }
}
