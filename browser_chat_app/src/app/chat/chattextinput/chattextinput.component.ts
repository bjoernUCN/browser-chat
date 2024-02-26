import { Component } from '@angular/core';
import { ChatsendService } from '../services/chatsend.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chattextinput',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chattextinput.component.html',
  styleUrl: './chattextinput.component.scss'
})
export class ChattextinputComponent {

  messages: string[] = [];

  get items(): ReadonlyArray<string> {
    return this.chatSendService.messages;
  }

  constructor(private chatSendService: ChatsendService) {}

  ngOnInit(): void {
    const url = 'ws://localhost:8080';
    this.chatSendService.connect(url);
  }

  ChatSend(form: NgForm) {
    this.chatSendService.send(form.value.message);
    console.log(form.value.message);
    form.reset();
  }

}
