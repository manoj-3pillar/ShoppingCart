import { Component, OnInit } from "@angular/core";
import { Country } from "src/app/models/enums/country-enum";
import { State } from "src/app/models/enums/state-enum";
import { OrderDetail } from "src/app/models/orderDetails";
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
    formFieldsValid: boolean = true;

    constructor(
        private productService: ProductService
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
        if(orderDetail.firstName === "" || orderDetail.lastName === "" 
        || orderDetail.email === "" || orderDetail.address === ""
        || orderDetail.country === "Choose Country" || orderDetail.state === "Choose State"
        || orderDetail.zip === ""){
            this.formFieldsValid = false;
            alert("One or more fields are empty!!");
        }
        else{
            if(!orderDetail.email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")){
                this.formFieldsValid = false;
                alert("Email is invalid!!");
            }
            if(!orderDetail.zip.match("[0-9]{1,100}")){
                this.formFieldsValid = false;
                alert("Zip Code is invalid!!");
            }
            if(this.formFieldsValid){
                this.productService.placeOrder(orderDetail);
            }
        }
    }
}