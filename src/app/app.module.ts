import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { CartItemComponent } from './components/shoppingcart/cart/cart-item/cart-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './modules/products/products.module';
import { OrderHistoryModule } from './modules/order-history/order-history.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingcartComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    OrderHistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
