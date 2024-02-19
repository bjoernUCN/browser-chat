import { Component } from '@angular/core';
import { ChatsendService } from '../services/chatsend.service';

@Component({
  selector: 'app-chattextinput',
  standalone: true,
  imports: [],
  templateUrl: './chattextinput.component.html',
  styleUrl: './chattextinput.component.scss'
})
export class ChattextinputComponent {

  constructor(private chatSendService: ChatsendService){


  }

  private ChatSend(){
    this.chatSendService.Send("User sample message");
  }

}
