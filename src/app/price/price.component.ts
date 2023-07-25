import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit {
  price: number | undefined;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.getWebSocketData().subscribe((data: any) => {
      // WebSocket sunucusundan gelen verileri burada işleyebilirsiniz
      if (data && data.currency === 'gold') {
        this.price = data.price;
      }
    });
  }
}
