import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import DEFS from 'src/app/data/globals.json';
import { MessengerService } from 'src/app/modules/messenger.service';
import { ProductService } from '../../product-service.service';
import { CartService } from 'src/app/modules/cart/cart-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;
  IMG_FOLDER_PATH: string = DEFS.IMG_FOLDER_PATH;
  DEFAULT_IMG: string = this.IMG_FOLDER_PATH + DEFS.DEFAULT_IMG;
  DEFAULT_ALT_TEXT: string = DEFS.DEFAULT_ALT_TEXT;

  constructor(private router: Router, private msg: MessengerService, private cartService: CartService) {}

  ngOnInit(): void {
    if(this.productItem.imageUrl !== "" && !this.productItem.imageUrl.includes('/')){
      this.productItem.imageUrl = this.IMG_FOLDER_PATH + this.productItem.imageUrl;
    }
  }

  handleAddToCart(){
    this.cartService.addToCart(this.productItem);
  }

 getProductDesc(id: number): void{
    this.router.navigate(['/product/'+id]);
  }
}
