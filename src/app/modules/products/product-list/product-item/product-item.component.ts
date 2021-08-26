import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import DEFS from 'src/app/data/globals.json';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;
  DEFAULT_IMG: string = DEFS.DEFAULT_IMG;
  DEFAULT_ALT_TEXT: string = DEFS.DEFAULT_ALT_TEXT;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

 getProductDesc(id: number): void{
    this.router.navigate(['/product/'+id]);
  }
}
