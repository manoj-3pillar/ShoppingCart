import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDescriptionComponent } from "./modules/products/product-description/product-description.component";
import { ShoppingcartComponent } from "./modules/shoppingcart/shoppingcart.component";
import { CheckoutComponent } from "./modules/order-history/checkout/checkout.component";
import { ProductListComponent } from './modules/products/product-list/product-list.component';
import { CartListComponent } from "./modules/cart/cart-list/cart-list.component";
import { OrdersHistoryComponent } from "./modules/order-history/orders/orders.component";
import { OrderProductComponent } from "./modules/order-history/orderProducts/orderProducts.component";
import { ProductSearchComponent } from "./modules/products/product-search/product-search.component";

const appRoutes: Routes = [
    {path: 'product/:id', component: ProductDescriptionComponent},
    // {path:'cart', component: CartListComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: '', component: ShoppingcartComponent},
    {path: 'search/:searchTerm', component: ShoppingcartComponent},
    {path: 'orders', component: OrdersHistoryComponent},
    {path: 'orders/products/:id', component: OrderProductComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
})
export class AppRoutingModule{
     
}