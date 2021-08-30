import { Filter } from './../../../models/filter';
import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  isFilterByPrice: boolean = false;
  isFilterByCategory: boolean = false;
  categories: Category[] = [];
  selectedCategories: number[] = [];
  fromRange: number = 0;
  toRange: number = 0;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    
  }

  filterByPrice(): void {
    this.isFilterByPrice = !this.isFilterByPrice;
  }
  
  filterByCategory(): void {
    this.isFilterByCategory = !this.isFilterByCategory;
    if(this.isFilterByCategory && this.categories.length === 0){
      this.categories = this.productService.getProductCategories();
    }
  }

  updateCategory(category: Category): void {
    if(this.selectedCategories.filter(cat => cat === category.id).length > 0){
      this.selectedCategories = this.selectedCategories.filter(cat => category.id !== cat);
    }
    else{
      this.selectedCategories.push(category.id);
    }
  }

  updateFromRange(event: any): void {
    this.fromRange = parseInt(event.target.value);
  }

  updateToRange(event: any): void {
    if(event.target.value < this.fromRange){
      this.toRange = this.fromRange;
    }
    else{
      this.toRange = parseInt(event.target.value);
    }
  }

  clear(): void {
    this.selectedCategories = [];
    this.fromRange = 0;
    this.toRange = 0;
    this.isFilterByPrice = false;
    this.isFilterByCategory = false;
  }

  applyChanges(): Filter {
    let result = new Filter(this.fromRange, this.toRange, this.selectedCategories);
    return result;
  }
}
