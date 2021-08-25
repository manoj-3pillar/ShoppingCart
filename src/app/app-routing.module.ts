import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckoutComponent } from "./components/shoppingcart/checkout/checkout.component";
import { ProductComponent } from "./components/shoppingcart/productdescription/productdesc.component";
import { ShoppingcartComponent } from "./components/shoppingcart/shoppingcart.component";

const appRoutes: Routes = [
    {path: 'product/:id', component: ProductComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: '', component: ShoppingcartComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
})
export class AppRoutingModule{
     
}