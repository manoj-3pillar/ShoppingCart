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
  search:String ="";
  constructor(private productService : ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params.search)
      this.search= params.search;
    });
  }
  Search(){
    if(this.search ==""){
      this.router.navigateByUrl('/search/'+this.search);
     //this.ngOnInit();
    }else{
      this.productList = this.productList.filter(res =>{
       // console.log(res.name.toLocaleLowerCase()==this.search.toLocaleLowerCase());
        return res.name.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      });
    }
  }
}
