import { ProductFilterComponent } from '../products/product-filter/product-filter.component';
import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  @ViewChild(ProductFilterComponent) filter: any;
  filterValue: Filter = new Filter(0, 0, []);

  constructor() { }

  ngOnInit(): void {
  }

  apply(): void {
    this.filterValue = new Filter(isNaN(this.filter.fromRange) ? 0 : this.filter.fromRange, isNaN(this.filter.toRange) ? 0 : this.filter.toRange, this.filter.selectedCategories);
  }

  clear() {
    this.filter.clear();
    this.apply();
  }
}
