import { Component, OnInit } from "@angular/core";
import { Country } from "src/app/models/enums/country-enum";
import { State } from "src/app/models/enums/state-enum";
import { OrderDetail } from "src/app/models/orderDetails";

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
    orderDetail: OrderDetail = new OrderDetail("", "", "", "", "", "", "");

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
        this.orderDetail = new OrderDetail("", "", "", "", "", "", "");
    }

    placeOrder(orderDetail: OrderDetail){
        //   var firstName = orderDetail.firstName;
        //   var state = orderDetail.state;
    }
}