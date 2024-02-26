import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatsendService {
  
  private socket$!: WebSocketSubject<any>;
  public messages: string[]
  constructor() {this.messages = [] }

  connect(url: string): void {
    this.socket$ = webSocket({
      url,
      deserializer: (msg) => msg, // Disable deserialization
    });

    this.recieveMessage();
  }

  private recieveMessage() {
    this.socket$.subscribe(
      (event: MessageEvent) => {

        const data = JSON.parse(event.data)
        const message = data; // Extract message data
        
        console.log('Received message from server:', message); // Log the message
        this.messages.push(message);
        
        if (this.messages.length > 20) {
          this.messages = this.messages.slice(-20);
        }
        // You can emit an event or perform any other action with the received message here
      },
      (error) => console.error(error),
      () => console.log('Socket connection closed')
    );
  }

  send(message: string): void {
    if (this.socket$) {
      this.socket$.next(message);
    } else {
      console.error('Socket connection not initialized');
    }
  }

  close(): void {
    if (this.socket$) {
      this.socket$.complete();
    }
  }
}