import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderDetail } from "src/app/models/orderDetails";
import { ProductService } from "../../products/product-service.service";

@Component({
    selector: 'prod-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersHistoryComponent implements OnInit{

    orders: OrderDetail[] = []; 
    constructor(private router: Router, private productService: ProductService){}
    ngOnInit(){
       this.orders = this.productService.getOrderList();
    }
    getCartItemsForOrder(orderID: string){
        this.router.navigate(['/orders/products/'+orderID]);
    }
}