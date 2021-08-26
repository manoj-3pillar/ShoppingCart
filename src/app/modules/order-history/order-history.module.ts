import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CheckoutComponent } from "./checkout/checkout.component";

@NgModule({
    declarations: [
        CheckoutComponent
    ],
    imports: [CommonModule],
    exports: [CheckoutComponent]
})
export class OrderHistoryModule{

}