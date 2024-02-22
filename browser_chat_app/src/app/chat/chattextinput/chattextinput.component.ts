import { Component } from '@angular/core';
import { ChatsendService } from '../services/chatsend.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chattextinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chattextinput.component.html',
  styleUrl: './chattextinput.component.scss'
})
export class ChattextinputComponent {

  constructor(private chatSendService: ChatsendService){
  }

  ChatSend(form: NgForm) {
    this.chatSendService.Send(form.value.message);
    form.reset();
  }
}
