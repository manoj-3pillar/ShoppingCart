import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

export class OrderDetail {  
    public firstName: string;
        public lastName: string;  
        public email: string;
        public address: string;  
        public address2: string;
        public country: string | null;
        public state: string | null;
        public zip: string;
    constructor(  
        firstName: string, 
        lastName: string,
        email: string,
         address: string,  
         address2: string,
         country: string,
         state: string,
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