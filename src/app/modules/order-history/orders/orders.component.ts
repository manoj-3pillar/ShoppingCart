import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../products/product-service.service";

@Component({
    selector: 'prod-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersHistoryComponent implements OnInit{

    constructor(private productService: ProductService){}
    ngOnInit(){
        var orders = this.productService.getOrderList();
    }
}