import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { MessengerService } from '../messenger.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList: CartItem[] = [];

  constructor(private msgService: MessengerService) { }

  addToCart(product: Product) {
    
    let productExist = false;
    let cartItems : CartItem[] = [];    

    if(localStorage.getItem('cart' + this.msgService.currentUser.userId) === null)
    {
      cartItems.push(new CartItem(cartItems.length +1, product));
    }
    else {

        cartItems = JSON.parse(localStorage.getItem('cart' + this.msgService.currentUser.userId) || '{}');

        for(let i in cartItems)
        {
          if(cartItems[i].productId === product.id) {
            cartItems[i].qty++;
            productExist = true;
            break;
          }          
        }

        if(!productExist)
        {
          cartItems.push(new CartItem(cartItems.length +1, product));
        }
    }

    localStorage.setItem('cart' + this.msgService.currentUser.userId, JSON.stringify(cartItems));
    this.msgService.sendTotalCartItem(cartItems.length)
    console.log(cartItems);
  }

  getCartItems(userId: string){
    return JSON.parse(localStorage.getItem('cart' + userId) || '{}');
  }
}
