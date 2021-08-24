import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./components/shoppingcart/productdescription/productdesc.component";
import { ShoppingcartComponent } from "./components/shoppingcart/shoppingcart.component";

const appRoutes: Routes = [
    {path: 'product/:id', component: ProductComponent},
    {path: '', component: ShoppingcartComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
})
export class AppRoutingModule{
     
}