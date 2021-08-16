import { MsgModalDirective } from './../msg-modal.directive';
import { MessagesComponent } from './../messages/messages.component';
import { Observable } from 'rxjs';
import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'hrs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('appTitle') title?: string;
  @ViewChild(MsgModalDirective, { static: true, read: MsgModalDirective })
  msgModalHost!: MsgModalDirective;

  @Input() condition: any;
  constructor(
    private messagesService: MessagesService,
    private cmpFactoryResolver: ComponentFactoryResolver
  ) {}

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
  loadComponent() {
    const cmpFactory =
      this.cmpFactoryResolver.resolveComponentFactory(MessagesComponent);

    const viewContainerRef = this.msgModalHost.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(cmpFactory);
  }
}
