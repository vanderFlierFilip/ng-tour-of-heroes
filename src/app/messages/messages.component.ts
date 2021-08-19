import { MessagesService } from './../messages.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'hrs-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', animate('0.5s')),
    ]),
  ],
})
export class MessagesComponent implements OnInit {
  isDelete = false;
  @Output() closeEvent = new EventEmitter();
  constructor(public messagesService: MessagesService) {}

  ngOnInit(): void {}

  deleteMessages(): void {
    this.messagesService.clear();

    this.isDelete = !!this.isDelete;
  }

  close(): void {
    this.closeEvent.emit();
  }
}
