import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg() {
    this.subject.next() // triggering an event
  }

  getMsg() {
    this.subject.asObservable()
  }
}
