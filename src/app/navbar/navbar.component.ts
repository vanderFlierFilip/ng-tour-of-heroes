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

  getLength() {
    return this.messagesService.messages.length;
  }
}
