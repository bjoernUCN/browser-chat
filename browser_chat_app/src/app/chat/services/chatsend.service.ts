import { EMPTY, Observable, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ChatsendService {
  userName : string;
  private socket$!: WebSocketSubject<any>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.userName = "Unnamed";
    if (isPlatformBrowser(this.platformId)) {
      // Initialize WebSocket connection here
      this.socket$ = webSocket('ws://localhost:8080/ws');
    }
  }


  public Send(input: string){
    if(input != undefined && this.socket$ != undefined){
      console.log(input); //Later send to the api
      this.socket$.next(input);
    }
    
  }

  getMessages(): Observable<any> {
    if (this.socket$) {
      return this.socket$.asObservable();
    } else {
      // Handle the case where socket$ is not initialized
      // For example, return an empty observable
      return EMPTY;
    }
  }

}
