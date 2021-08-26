import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckoutComponent } from "./components/shoppingcart/checkout/checkout.component";
import { ProductDescriptionComponent } from "./modules/products/product-description/product-description.component";
import { ShoppingcartComponent } from "./components/shoppingcart/shoppingcart.component";

const appRoutes: Routes = [
    {path: 'product/:id', component: ProductDescriptionComponent},
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