import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-euro',
  templateUrl: './euro-price.component.html',
  styleUrls: ['./euro-price.component.css'],
})
export class EuroPriceComponent implements OnInit {
  price: number | undefined;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.getWebSocketData().subscribe((data: any) => {
      // WebSocket sunucusundan gelen verileri burada işleyebilirsiniz
      if (data && data.currency === 'euro') {
        this.price = data.price;
      }
    });
  }
}
