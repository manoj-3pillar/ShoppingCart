import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [
    { id:1, productId:1, productName: "product Nmae 1", qty:2, price:120 },
    { id:4, productId:4, productName: "product Nmae 4", qty:1, price:120 },
    { id:3, productId:3, productName: "product Nmae 3", qty:3, price:120 },
    { id:2, productId:2, productName: "product Nmae 2", qty:5, price:120 }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
