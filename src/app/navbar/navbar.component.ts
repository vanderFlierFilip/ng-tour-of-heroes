import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'hrs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('appTitle') title?: string;
  msgLength?: number;
  msgToolTip: string = '';
  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {}

  getLength() {
    const length = this.messagesService.messages.length;
    this.msgToolTip = `You have ${length} messages`;
    return length;
  }
}
