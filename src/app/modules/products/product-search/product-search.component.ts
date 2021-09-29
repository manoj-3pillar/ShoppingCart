import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
 
  constructor(private productService : ProductService,private route:ActivatedRoute) { }
  productList: Product[] = [];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm){
       this.productList = this.productService.getProducts().filter( product => product.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
     } else
      this.productList= this.productService.getProducts(); 
     });
  }
  
}
