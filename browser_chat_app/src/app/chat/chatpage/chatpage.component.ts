import { Component } from '@angular/core';
import { ChatlogComponent } from '../chatlog/chatlog.component';
import { ChattextinputComponent } from '../chattextinput/chattextinput.component';
import { ChatsendService } from '../services/chatsend.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-chatpage',
  standalone: true,
  imports: [ChatlogComponent, ChattextinputComponent],
  templateUrl: './chatpage.component.html',
  styleUrl: './chatpage.component.scss'
})
export class ChatpageComponent implements OnInit {
  constructor(private chatSendService: ChatsendService){

  }
  ngOnInit(): void {
    this.chatSendService.userName ="Me";
    this.chatSendService.Send("User ["+this.chatSendService.userName+"] joined");
  }

  



}
