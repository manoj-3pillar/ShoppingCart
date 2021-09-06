import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Country } from "src/app/models/enums/country-enum";
import { State } from "src/app/models/enums/state-enum";
import { OrderDetail } from "src/app/models/orderDetails";
import { CartService } from "../../cart/cart-service.service";
import { MessengerService } from "../../messenger.service";
import { ProductService } from "../../products/product-service.service";

@Component({
    selector: 'prod-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
    statesEnums = State;
    countryEnums = Country;
    states: string[] = [];
    countries: string[] = [];
    selectedValue: string = "Choose.."
    orderDetail: OrderDetail = new OrderDetail("", "", "", "", "", "", "", "");
    orderPlaced: Boolean = false;

    constructor(
        private productService: ProductService,
        private router: Router,
        private msgService: MessengerService,
        private cartService: CartService
    ){}

    ngOnInit(): void {
        for(var stateEnum in this.statesEnums){
            var isValueProperty = parseInt(stateEnum, 10) >= 0
            if(isValueProperty){
                var state = this.statesEnums[stateEnum];
                this.states.push(state);
            }
        }
        for(var countryEnum in this.countryEnums){
            var isValueProperty = parseInt(countryEnum, 10) >= 0
            if(isValueProperty){
                var country = this.countryEnums[countryEnum];
                this.countries.push(country);
            }
        }
        this.orderDetail = new OrderDetail("", "", "", "", "", null, null, "");
    }

    placeOrder(orderDetail: OrderDetail){
          this.orderPlaced = this.productService.placeOrder(orderDetail);
          if(this.orderPlaced){
          alert('Order Placed Successfully');
          }
          else{
            alert('Order cannot be placed!!');
          }
          this.router.navigate(['']);
    }
}