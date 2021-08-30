import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  productList: Product[] = [];
  search:any;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }
  Search(){
    if(this.search ==""){
     this.ngOnInit();
    }else{
      this.productList = this.productList.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      });
    }
  }
}
