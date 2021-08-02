import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'hrs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('appTitle') title?: string;

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {}

  // Eventually this logic can be transferred to the service to make this component more presentational
  getMessagesLength(): number | null {
    const length = this.messagesService.messages.length;

    if (length === 0) {
      return null;
    }

    return length;
  }

  displayMsgNumber(): string {
    const msgNumber = this.getMessagesLength();

    if (!msgNumber) {
      return `You have no messages`;
    }
    return `You have ${
      msgNumber === 1 ? `${msgNumber} message` : `${msgNumber} messages`
    }`;
  }
}
