import { ProductCategory } from './../../../models/enums/category-enum';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
    selector: 'prod-desc',
    templateUrl: './productdesc.component.html',
    styleUrls: ['./productdesc.component.css']
})
export class ProductComponent implements OnInit{
 
    productID: any;
    productData: Product = new Product(99, "Dummy Product", "Dummy Desc", 0, "DummyUrl", ProductCategory.Electronics);
    constructor(
        private productService: ProductService,
        private actRoute: ActivatedRoute
    ){}

    ngOnInit(){
        this.productID = this.actRoute.snapshot.params['id'];
        this.loadProductDetails(this.productID);
    }

    loadProductDetails(productID : number){
           this.productData = this.productService.getProducts().filter(prod => prod.id == this.productID)[0];
      }
}