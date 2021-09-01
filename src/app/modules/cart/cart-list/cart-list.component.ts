import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems = [
    { id:1, productId:1, productName: "product Nmae 1", qty:2, price:120 },
    { id:4, productId:4, productName: "product Nmae 4", qty:1, price:130 },
    { id:3, productId:3, productName: "product Nmae 3", qty:3, price:140 },
    { id:2, productId:2, productName: "product Nmae 2", qty:5, price:150 }
  ];

  cartTotal = 0;
  totalQty = 0;
  isUserLogin: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price),
      this.totalQty += item.qty
    })
  }

  proceedToCheckout(): void{
    if(this.isUserLogin)
        this.router.navigate(['/checkout']);
  }

}
