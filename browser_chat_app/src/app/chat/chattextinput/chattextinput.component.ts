import { Component } from '@angular/core';
import { ChatsendService } from '../services/chatsend.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chattextinput',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chattextinput.component.html',
  styleUrl: './chattextinput.component.scss'
})
export class ChattextinputComponent {

  messages: string[] = [];

  constructor(private chatSendService: ChatsendService)
  {
    this.chatSendService.getMessages().subscribe((msg: any) => {
      this.messages.push(msg);
    });
  }

  ChatSend(form: NgForm) {
    this.chatSendService.Send(form.value.message);

    form.reset();
  }
}
