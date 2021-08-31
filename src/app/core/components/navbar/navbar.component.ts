import { MsgModalDirective } from '../../directives/msg-modal.directive';
import { MessagesComponent } from '../../../messages/messages.component';
import { Observable, Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';
import { MessagesService } from '../../../messages/messages.service';

@Component({
  selector: 'hrs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('appTitle') title?: string;
  @ViewChild(MsgModalDirective, { static: true, read: MsgModalDirective })
  msgModalHost!: MsgModalDirective;
  closeSub!: Subscription;
  msgNumValueString!: string;

  @Input() condition: any;
  constructor(
    private messagesService: MessagesService,
    private cmpFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  getMessagesLength(): string | null {
    const msgLength = this.messagesService.getMessagesLength();
    this.msgNumValueString = msgLength?.toString()!;

    // don't display the value 0 and the badge in the view
    return this.msgNumValueString === '0' ? null : this.msgNumValueString;
  }

  loadComponent() {
    const cmpFactory =
      this.cmpFactoryResolver.resolveComponentFactory(MessagesComponent);

    const viewContainerRef = this.msgModalHost.viewContainerRef;

    viewContainerRef.clear();

    const msgComponentRef = viewContainerRef.createComponent(cmpFactory);

    this.closeSub = msgComponentRef.instance.closeEvent.subscribe(() => {
      this.closeSub.unsubscribe();
      viewContainerRef.clear();
    });
  }
}
