import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-gold-price',
  templateUrl: './gold-price.component.html',
  styleUrls: ['./gold-price.component.css'],
})
export class GoldPriceComponent implements OnInit {
  goldPrice: number | undefined;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.getWebSocketData().subscribe((data: any) => {
      if (data && data.currency === 'gold') {
        this.goldPrice = data.price;
      }
    });
  }
}
