import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { MessengerService } from '../../messenger.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems: CartItem[] = [];

  cartTotal = 0;  
  cartId: number = 0;
  qtyTotal = 0;
  isUserLogin: boolean = true;
  constructor(private router: Router, private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: any) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {
    let productExist = false;

    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExist = true;
        break;
      }
    }

    if(!productExist) {
      this.cartItems.push(new CartItem(0, product));
    }

    this.cartTotal = 0;
    this.qtyTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
      this.qtyTotal += item.qty;
    });
  }

  proceedToCheckout(): void{
    if(this.isUserLogin)
        this.router.navigate(['/checkout']);
  }
}
