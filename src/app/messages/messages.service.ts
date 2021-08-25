import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private subject = new BehaviorSubject<string[] | null>([]);
  messages$: Observable<string[] | null> = this.subject.asObservable();
  constructor() {}

  add(message: string) {
    let messages = this.subject.getValue();
    messages?.push(message);
    this.subject.next(messages);
  }

  clear() {
    this.subject.next([]);
  }

  getMessagesLength(): number | undefined {
    const messages = this.subject.getValue();
    const length = messages?.length;
    return length;
  }
}
