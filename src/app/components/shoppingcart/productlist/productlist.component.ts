import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  productList: Product[] = []

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

}
