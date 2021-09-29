import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/modules/cart/cart-service.service';
import { MessengerService } from 'src/app/modules/messenger.service';
import { ProductService } from 'src/app/modules/products/product-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  CartItems = [];
  noOfItemsInCart = 0;
  showOrderHistoryLink = false;
  productList: Product[] = [];
  searchTerm:String ="";
  constructor(private productService : ProductService,private router: Router, private msgService: MessengerService,private route:ActivatedRoute,
     private cartservice : CartService) { }
  ngOnInit(): void {
    this.msgService.getTotalCartItem().subscribe( no => {
      this.CartItems = this.cartservice.getCartItems(this.msgService.currentUser.userId.toString());
      this.noOfItemsInCart = no;
      this.showOrderHistoryLink = this.msgService.currentUser.isUserLoggedin;
    });
    this.route.params.subscribe(params =>{
      if(params.searchTerm)
      this.searchTerm= params.searchTerm;
    });
  }

  showCartItems(): void{
    this.router.navigate(['/checkout']);
  }
  viewOrderHistory(): void{
    if(this.msgService.currentUser.isUserLoggedin){
      this.router.navigate(['/orders']);
    }        
  }
  Search():void{
    if(this.searchTerm){
      this.router.navigate(['/search/'+this.searchTerm]);
    }
  }
}
