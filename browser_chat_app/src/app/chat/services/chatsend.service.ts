import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observer } from 'rxjs';
import { Message} from '../model/message';

@Injectable({
  providedIn: 'root',
})
export class ChatsendService {
  
  private socket$!: WebSocketSubject<any>;
  public messages: Message[]

  constructor() {
    this.messages = [] 

  }

  connect(url: string): void {
    this.socket$ = webSocket({
      url,
      deserializer: (msg) => msg, // Disable deserialization
    });

    this.recieveMessage();
  }

  public recieveMessage() { //extract into own service
    this.socket$.subscribe(
      (event: MessageEvent) => {

        const data = JSON.parse(event.data)
        const msg: Message = JSON.parse(data);
        this.messages.push(msg);

       // const message = msg.content; // Extracted message data
       // console.log('Received message from server:', message); // Log the message
        
        if (this.messages.length > 20) {
          this.messages = this.messages.slice(-20);
        }
        // You can emit an event or perform any other action with the received message here
      },
      (error) => console.error(error),
      () => console.log('Socket connection closed')
    );
  }

  send(message: Message): void {
    if (this.socket$) {
      this.socket$.next(JSON.stringify(message));
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