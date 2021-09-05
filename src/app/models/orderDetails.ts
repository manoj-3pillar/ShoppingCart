import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";
import { Guid } from "guid-typescript";
import { CartItem } from "./cart-item";

export class OrderDetail {  
    public firstName: string;
        public lastName: string;  
        public email: string;
        public address: string;  
        public address2: string;
        public country: string | null;
        public state: string | null;
        public zip: string;
        public cartItems: CartItem[] = [];
        public userID!: Guid;
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