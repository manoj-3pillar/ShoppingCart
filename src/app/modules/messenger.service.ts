import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  currentUser = {
    username: 'string',
    userId : Guid.create(),
    isUserLoggedin : true,
    NoOfItemsInCart : 0
  };


  constructor() { }

  sendTotalCartItem(cartItemLength : number = 0)
  {
    this.subject.next(cartItemLength)
  }

  getTotalCartItem()
  {
    return this.subject.asObservable()
  }

}
