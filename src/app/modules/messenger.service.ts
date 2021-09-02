import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product: Product) {
    this.subject.next(product) // triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
