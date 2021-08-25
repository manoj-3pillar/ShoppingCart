import { Category } from './../models/category';
import { ProductCategory } from './../models/enums/category-enum';
import { Injectable } from '@angular/core';
import { Product } from "src/app/models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [];
  categories : Category[] = [];

  constructor() { 
    this.initializeData();
  }

  getProducts(): Product[]  {
    return this.products;
  }

  getProductCategories(): Category[] {
    return this.categories;
  }

  private initializeData(): void {
    this.products = [
      new Product(1, "Product 1", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 120, "./../../../../../assets/imgs/rubikscube.jpg", ProductCategory.Electronics),
      new Product(2, "Product 2", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 130, "", ProductCategory.Clothing),
      new Product(3, "Product 3", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 140, "", ProductCategory.Books),
      new Product(4, "Product 4", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 150, "", ProductCategory.Electronics),
      new Product(5, "Product 5", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 160, "", ProductCategory.Clothing),
      new Product(6, "Product 6", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 170, "", ProductCategory.Books),
      new Product(7, "Product 7", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 180, "", ProductCategory.Electronics),
      new Product(8, "Product 8", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 190, "", ProductCategory.Clothing),
      new Product(9, "Product 9", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 200, "", ProductCategory.Books)
    ];

    this.categories = [
      new Category(1, "Electronics"),
      new Category(2, "Clothing"),
      new Category(3, "Books"),
      new Category(4, "Others")
    ];
  }
}
