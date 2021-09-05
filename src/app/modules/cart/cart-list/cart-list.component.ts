import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { MessengerService } from '../../messenger.service';
import { CartService } from '../cart-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartList: CartItem[] = [];
  isUserLogin: boolean = true;
  qtyTotal = 0;
  cartTotal = 0;
  isCartEmpty = false;

  constructor(private router: Router, private msgService: MessengerService, private cartService: CartService, private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.params);
    this.isCartEmpty = this.cartList.length == 0;
    this.route.params.subscribe(params => {      
       this.cartList = this.cartService.getCartItems(this.msgService.currentUser.userId.toString());
       this.getTotal();
      });
  } 
  
  getTotal() {
    this.cartTotal = 0;
    this.qtyTotal = 0;
    this.cartList.forEach(item => {
      this.cartTotal += (item.qty * item.price);
      this.qtyTotal += item.qty;
    });
    this.isCartEmpty = this.cartList.length == 0;
  }

  proceedToCheckout(): void{
    if(this.msgService.currentUser.isUserLoggedin)
        this.router.navigate(['/checkout']);
  }
}
