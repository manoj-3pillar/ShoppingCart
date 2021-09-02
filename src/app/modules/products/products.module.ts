import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from 'src/app/modules/products/product-list/product-list.component';
import { ProductDescriptionComponent } from 'src/app/modules/products/product-description/product-description.component';
import { ProductItemComponent } from 'src/app/modules/products/product-list/product-item/product-item.component';
import { ProductFilterComponent } from 'src/app/modules/products/product-filter/product-filter.component';
import { ProductSearchComponent } from 'src/app/modules/products/product-search/product-search.component';
import { MessengerService } from 'src/app/modules/messenger.service';

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    ProductDescriptionComponent,
    ProductFilterComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    MessengerService
  ],
  exports: [
    ProductItemComponent,
    ProductListComponent,
    ProductDescriptionComponent,
    ProductFilterComponent,
    ProductSearchComponent,
  ]
})
export class ProductsModule {
 }
