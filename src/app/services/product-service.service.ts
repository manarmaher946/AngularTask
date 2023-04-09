import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/SharedClassesandtypes/shred';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  Productarray:IProduct[]=[
    {ID:0,Name:'Iphone',Quantity:500,Price:2000,Img:'./assets/Photo_banner/pp.jpg',Isdiscount:false,discount:0},
    {ID:1,Name:'Samsung',Quantity:300,Price:3000,Img:'./assets/Photo_banner/ww.jpg',Isdiscount:true,discount:0},
    {ID:2,Name:'tablet',Quantity:200,Price:9000,Img:'./assets/Photo_banner/qq.jpg',Isdiscount:true,discount:0},
  ]

  GetAllProducts(){
    return this.Productarray;
  }

  GetProductsWithDiscount(){
   var Productswithdiscount:IProduct[]=[]
    for(let product of this.Productarray){
      if(product.Isdiscount==true){
        Productswithdiscount.push(product);
      }
    }
    return Productswithdiscount;
  }

  GetProductsWithoutDiscount(){
    var Productswithoutdiscount:IProduct[]=[]
     for(let product of this.Productarray){
       if(product.Isdiscount==false){
        Productswithoutdiscount.push(product);
       }
     }
     return Productswithoutdiscount;
   }

  showproducts:boolean=true;
  GetProductById(prdId:number){
    for(let product of this.Productarray){
      if(product.ID==prdId){
        return product;
      }
    }
    return null;
  }

}
