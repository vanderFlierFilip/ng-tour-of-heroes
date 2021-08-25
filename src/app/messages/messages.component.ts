import { MessagesService } from './messages.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share, shareReplay } from 'rxjs/operators';

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
  messages$!: Observable<string[] | null>;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      share()
    );
  @Output() closeEvent = new EventEmitter();

  constructor(
    public messagesService: MessagesService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.messages$ = this.messagesService.messages$;
  }

  deleteMessages(): void {
    this.messagesService.clear();

    this.isDelete = !!this.isDelete;
  }

  close(): void {
    this.closeEvent.emit();
  }
}
