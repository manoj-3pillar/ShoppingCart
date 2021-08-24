import { Injectable } from '@angular/core';
import { Product } from "src/app/models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [
    new Product(1, "Product 1", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 120, "https://scx2.b-cdn.net/gfx/news/2018/1-rubikscube.jpg"),
    new Product(2, "Product 2", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 130, "https://scx2.b-cdn.net/gfx/news/2018/1-rubikscube.jpg"),
    new Product(3, "Product 3", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 140, "https://scx2.b-cdn.net/gfx/news/2018/1-rubikscube.jpg"),
    new Product(4, "Product 4", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 150, "https://scx2.b-cdn.net/gfx/news/2018/1-rubikscube.jpg"),
    new Product(5, "Product 5", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 160, "https://scx2.b-cdn.net/gfx/news/2018/1-rubikscube.jpg"),
    new Product(6, "Product 6", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 170, "https://scx2.b-cdn.net/gfx/news/2018/1-rubikscube.jpg"),
    new Product(7, "Product 7", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 180, "https://scx2.b-cdn.net/gfx/news/2018/1-rubikscube.jpg"),
    new Product(8, "Product 8", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", 190, "https://scx2.b-cdn.net/gfx/news/2018/1-rubikscube.jpg")
  ]
  constructor() { }

  getProducts(): Product[]  {
    return this.products;
  }
}
