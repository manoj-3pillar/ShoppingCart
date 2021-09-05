import { Category } from './../../models/category';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/enums/category-enum';
import Products from 'src/app/data/products.json';
import Categories from 'src/app/data/categories.json';
import { OrderDetail } from 'src/app/models/orderDetails';
import { MessengerService } from '../messenger.service';
import { CartService } from '../cart/cart-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [];
  categories : Category[] = [];
  categoryEnumArray = Object.keys(ProductCategory);

  constructor(private msgService: MessengerService, private cartService: CartService) { 
    this.initializeData();
  }

  getProducts(): Product[]  {
    return this.products;
  }

  getProductCategories(): Category[] {
    return this.categories;
  }

  placeOrder(orderDetail: OrderDetail){
    orderDetail.userID = this.msgService.currentUser.userId;
    orderDetail.cartItems = this.cartService.getCartItems(orderDetail.userID.toString());
    localStorage.setItem('order'+orderDetail.userID, JSON.stringify(orderDetail));
    localStorage.removeItem('cart' + orderDetail.userID.toString());
  }

  getOrderList(){
    return JSON.parse(localStorage.getItem('order'+this.msgService.currentUser.userId.toString()) || '{}')
  }

  private initializeData(): void {
    Products.forEach(product => {
      let newProduct: Product = new Product(
        product.id,
        product.name,
        product.description,
        product.price,
        product.imageUrl,
        product.category
        );

      this.products.push(newProduct)
    });

    Categories.forEach(category => {
      let newCategory: Category = new Category(
        category.id,
        category.name
        );

      this.categories.push(newCategory)
    });

    // MOVE THIS TO TEST  FILE: A TEST TO ENSURE CATEGORY ENUM IS IN SYNC WITH CATEGORIES.JSON
    if(this.categories.length !== ((this.categoryEnumArray.length/2)-1)){
      alert("Category Enum and json files are not is sync");
    }
  }
}
