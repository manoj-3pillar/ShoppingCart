import { ProductFilterComponent } from '../products/product-filter/product-filter.component';
import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from '../products/product-service.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  @ViewChild(ProductFilterComponent) filter: any;
  filterValue: Filter = new Filter(0, 0, []);
   
  constructor(private productService : ProductService,private route:ActivatedRoute) { }
  productList: Product[] = [];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
       if(params.searchTerm){
        console.log("Products "+JSON.stringify(this.productService.getProducts()));
        this.productList = this.productService.getProducts().filter( product => product.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
        console.log("productList "+JSON.stringify(this.productList));
      } else
       this.productList= this.productService.getProducts(); 
      });
  }

  apply(): void {
    this.filterValue = new Filter(isNaN(this.filter.fromRange) ? 0 : this.filter.fromRange, isNaN(this.filter.toRange) ? 0 : this.filter.toRange, this.filter.selectedCategories);
  }

  clear() {
    this.filter.clear();
    this.apply();
  }
}
