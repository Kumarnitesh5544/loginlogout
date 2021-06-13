import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    ProductData:Array<any>=[]

  constructor() { }
  addProduct(data:any){
    data.id=this.ProductData.length+1;
    this.ProductData.push(data);
  }
  returnProduct(){

    return this.ProductData;
  }

  returnProductbyId(id:number){
       return this.ProductData.find(p=> p.id==id);
  }

  updateProductbyId(id:any, data:any){
    data.id=id;
    var index=this.ProductData.findIndex(p=> p.id==id);
    this.ProductData[index]= data;
}  
remove(id:number){
  this.ProductData.splice(id-1,1);
}
}
