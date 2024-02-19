import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatpageComponent } from './chat/chatpage/chatpage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'browser_chat_app';
}
