import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

  getTotalCartItem(): Observable<any>
  {
    return this.subject.asObservable()
  }
}
