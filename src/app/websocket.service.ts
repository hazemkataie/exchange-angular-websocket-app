import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  // WebSocket sunucu adresi (gerekirse değiştirin)
  private socketUrl = 'ws://localhost:8080';

  private subject = webSocket(this.socketUrl);

  constructor() {}

  // WebSocket'ten veri alma metodu
  public getWebSocketData() {
    return this.subject.asObservable();
  }
}
