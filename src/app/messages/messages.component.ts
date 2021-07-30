import { MessagesService } from './../messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hrs-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(public messagesService: MessagesService) {}

  ngOnInit(): void {}
}
