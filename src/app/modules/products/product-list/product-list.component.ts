import { Filter } from './../../../models/filter';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() filterValue : Filter = new Filter(0, 0, []);
  productList: Product[] = []

  constructor(private productService : ProductService,private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
    console.log(this.route.params);
    this.route.params.subscribe(params =>{
      if(params.search){
       this.productList = this.productService.getProducts().filter(product =>{
         product.name.toLowerCase().includes(params.search.toLowerCase());
       }); 
      }else{
        this.productList = this.productService.getProducts();
        }
      });
    
  }

  ngOnChanges(): void {
    this.productList = this.productService.getProducts();
    if(this.filterValue.fromRange !== 0){
      this.productList = this.productList.filter(product => 
        product.price > this.filterValue.fromRange
      );
    }

    if(this.filterValue.toRange !== 0){
      this.productList = this.productList.filter(product => 
        product.price < this.filterValue.toRange
      );
    }

    if(this.filterValue.categoryIDs.length > 0){
      this.productList = this.productList.filter(product => 
        this.filterValue.categoryIDs.includes(product.category)
      );
    }
  }
}
