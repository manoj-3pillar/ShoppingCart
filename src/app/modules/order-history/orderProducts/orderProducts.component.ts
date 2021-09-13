import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../products/product-service.service";

@Component({
    selector: 'order-prods',
    templateUrl: './orderProducts.component.html',
    styleUrls: ['./orderProducts.component.css']
})
export class OrderProductComponent implements OnInit{
    constructor(private productService: ProductService){}
    ngOnInit(){
     }
}