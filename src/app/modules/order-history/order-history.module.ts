import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CheckoutComponent } from "./checkout/checkout.component";

@NgModule({
    declarations: [
        CheckoutComponent
    ],
    imports: [CommonModule, FormsModule],
    exports: [CheckoutComponent]
})
export class OrderHistoryModule{

}