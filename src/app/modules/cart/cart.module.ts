import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-list/cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    ProductsModule
  ],
  exports: [
    CartItemComponent,
    CartListComponent
  ]
})
export class CartModule { }
