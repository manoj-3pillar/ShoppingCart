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
  productList: Product[] = [];
  searchTerm:String ="";
  constructor(private productService : ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params.searchTerm)
      this.searchTerm= params.searchTerm;
    });
  }
  Search():void{
    if(this.searchTerm){
      this.router.navigateByUrl('/search/'+this.searchTerm);
    }
  }
}
