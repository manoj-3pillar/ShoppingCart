import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/modules/cart/cart-service.service';
import { MessengerService } from 'src/app/modules/messenger.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  CartItems = [];
  noOfItemsInCart = 0;

  constructor(private router: Router, private msgService: MessengerService, private cartservice : CartService) { }

  ngOnInit(): void {
    this.msgService.getTotalCartItem().subscribe( no => {
      this.CartItems = this.cartservice.getCartItems(this.msgService.currentUser.userId.toString());
      this.noOfItemsInCart = this.CartItems.length;
    });
  }

  showCartItems(): void{
    this.router.navigate(['/cart']);
  }

}
