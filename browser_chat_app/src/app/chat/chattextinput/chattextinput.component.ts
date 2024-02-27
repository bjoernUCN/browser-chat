import { Component } from '@angular/core';
import { ChatsendService } from '../services/chatsend.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Message } from '../model/message';
import { Type } from '../model/message';

@Component({
  selector: 'app-chattextinput',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chattextinput.component.html',
  styleUrl: './chattextinput.component.scss'
})

export class ChattextinputComponent {

  username: string = "unknown";
  message: string = "";

  get items(): ReadonlyArray<Message> {
    return this.chatSendService.messages;
  }

  constructor(private chatSendService: ChatsendService) {}

  ngOnInit(): void {
    const url = 'ws://localhost:8080';
    this.chatSendService.connect(url);
  }

  ChatSend(form: NgForm) {
    console.log(form.value.message);
    if(form.value.message == null)
      return;

    this.chatSendService.send(new Message(this.username, Type.text, form.value.message));
    //this.chatSendService.send(form.value.message);
    //form.reset();
    form.controls['message'].reset();

    }

}
