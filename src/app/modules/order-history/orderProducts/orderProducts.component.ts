import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartItem } from "src/app/models/cart-item";
import { OrderDetail } from "src/app/models/orderDetails";
import { ProductService } from "../../products/product-service.service";

@Component({
    selector: 'order-prods',
    templateUrl: './orderProducts.component.html',
    styleUrls: ['./orderProducts.component.css']
})
export class OrderProductComponent implements OnInit{
    orderID: any;
    cartItems: CartItem[] = [];
    orders: OrderDetail[] = [];
    constructor(private productService: ProductService, private actRoute: ActivatedRoute){}
    ngOnInit(){
        this.orders = this.productService.getOrderList();
        this.orderID = this.actRoute.snapshot.params['id'];
        var selectedOrder = this.orders.filter(order => order.orderID == this.orderID)[0];
        this.cartItems = selectedOrder.cartItems;
     }
}