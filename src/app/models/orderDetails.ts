import { Guid } from "guid-typescript";
import { CartItem } from "./cart-item";

export class OrderDetail {  
        public orderID!: string;
        public firstName: string;
        public lastName: string;  
        public email: string;
        public address: string;  
        public address2: string;
        public country: string | null;
        public state: string | null;
        public zip: string;
        public totalPrice: number = 0;
        public cartItems: CartItem[] = [];
        public userID!: Guid;
        public orderDate!: string;
    constructor(  
        firstName: string, 
        lastName: string,
        email: string,
         address: string,  
         address2: string,
         country: string | null,
         state: string | null,
         zip: string
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.address2 = address2;
        this.country = country;
        this.state = state;
        this.zip = zip;
    }  
}  