import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  isFilterByPrice: boolean = false;
  isFilterByCategory: boolean = false;
  categories: Category[] = [];
  selectedCategories: number[] = [];

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

  updateFromRange(): void {
    console.log("srer")
  }

  updateToRange(): void {
    console.log("dfdg")
  }
}
