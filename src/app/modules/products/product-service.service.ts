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
  ordersList: OrderDetail[] = [];

  constructor(private msgService: MessengerService, private cartService: CartService) { 
    this.initializeData();
  }

  getProducts(): Product[]  {
    return this.products;
  }

  getProductCategories(): Category[] {
    return this.categories;
  }

  placeOrder(orderDetail: OrderDetail): Boolean{
    try{
    orderDetail.userID = this.msgService.currentUser.userId;
    var previousOrders = JSON.parse(localStorage.getItem('orders' + this.msgService.currentUser.userId.toString()) || '{}');
    orderDetail.cartItems = this.cartService.getCartItems(orderDetail.userID.toString());

    if(Object.keys(orderDetail.cartItems).length === 0){
      return false;
    }

    if(Object.keys(previousOrders).length != 0){
    this.ordersList.push(previousOrders);
    }
    
    this.ordersList.push(orderDetail);
    localStorage.setItem('orders' + orderDetail.userID, JSON.stringify(this.ordersList));
    localStorage.removeItem('cart' + orderDetail.userID.toString());
    return true;
  }
  catch(ex: unknown){
      return false;
  }
  }

  getOrderList(){
    return JSON.parse(localStorage.getItem('orders' + this.msgService.currentUser.userId.toString()) || '{}')
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
