import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CartModule } from "../cart/cart.module";
import { CheckoutComponent } from "./checkout/checkout.component";
import { OrdersHistoryComponent } from "./orders/orders.component";

@NgModule({
    declarations: [
        CheckoutComponent,
        OrdersHistoryComponent
    ],
    imports: [CommonModule, FormsModule, CartModule],
    exports: [CheckoutComponent, OrdersHistoryComponent]
})
export class OrderHistoryModule{

}