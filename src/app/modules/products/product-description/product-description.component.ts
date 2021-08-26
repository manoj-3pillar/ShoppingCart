import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/enums/category-enum';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product-service.service';
import DEFS from 'src/app/data/globals.json';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

    productID: any;
    productData: Product = new Product(99, "Dummy Product", "Dummy Desc", 0, "DummyUrl", ProductCategory.Electronics);
    IMG_FOLDER_PATH: string = 'app/../assets/imgs/';
    DEFAULT_IMG: string = this.IMG_FOLDER_PATH + DEFS.DEFAULT_IMG;
    DEFAULT_ALT_TEXT: string = DEFS.DEFAULT_ALT_TEXT;

    constructor(
        private productService: ProductService,
        private actRoute: ActivatedRoute
    ){}

    ngOnInit(){
        this.productID = this.actRoute.snapshot.params['id'];
        this.loadProductDetails(this.productID);
        if(this.productData.imageUrl !== "" && !this.productData.imageUrl.includes('/')){
          this.productData.imageUrl = this.IMG_FOLDER_PATH + this.productData.imageUrl;
        }
    }

    loadProductDetails(productID : number){
           this.productData = this.productService.getProducts().filter(prod => prod.id == this.productID)[0];
      }
}
