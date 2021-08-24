import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";

@Component({
    selector: 'prod-desc',
    templateUrl: './productdesc.component.html',
    styleUrls: ['./productdesc.component.css']
})
export class ProductComponent implements OnInit{
 
    productID: any;
    productData: any;
    constructor(
        private productService: ProductService,
        private actRoute: ActivatedRoute
    ){}
    // ngOnInit(): void {
    //     throw new Error("Method not implemented.");
    // }

    ngOnInit(){
        this.productID = this.actRoute.snapshot.params['id'];
        // this.loadProductDetails(this.productID);
    }

    // loadProductDetails(productID : number){
    //       this.productService.getProductDescription(productID).subscribe((product: any) => {
    //       this.productData = product;
    //     });
    //   }
}