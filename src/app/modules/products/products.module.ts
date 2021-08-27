import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDescriptionComponent,
    ProductItemComponent,
    ProductFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductFilterComponent,
    ProductListComponent,
    ProductDescriptionComponent
  ]
})
export class ProductsModule {
 }
