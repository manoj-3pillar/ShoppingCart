import { ProductCategory } from './../../../../models/enums/category-enum';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;
  DEFAULT_IMG: string = './../../../../../assets/imgs/default.jpg';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

 getProductDesc(id: number): void{
    this.router.navigate(['/product/'+id]);
  }

}
