import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatsendService {
  userName : string;
  constructor() {this.userName="Unnamed"}

  public Send(input: string){
    console.log(input); //Later send to the api
  }


}
