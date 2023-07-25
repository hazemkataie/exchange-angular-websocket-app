import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-dollar',
  templateUrl: './dollar-price.component.html',
  styleUrls: ['./dollar-price.component.css'],
})
export class DollarPriceComponent implements OnInit {
  price: number | undefined;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.getWebSocketData().subscribe((data: any) => {
      // WebSocket sunucusundan gelen verileri burada işleyebilirsiniz
      if (data && data.currency === 'dollar') {
        this.price = data.price;
      }
    });
  }
}
