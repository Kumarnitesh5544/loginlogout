import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    ProductData:Array<any>=[]
    
  constructor(private http:HttpClient) { }
  addProduct(data:any){
 //   data.id=this.ProductData.length+1;
   // this.ProductData.push(data);
   return this.http.post(`https://60c76d91afc88600179f5156.mockapi.io/products`,data)
  }
  returnProduct(){
      return this.http.get(`https://60c76d91afc88600179f5156.mockapi.io/products`)
   // return this.ProductData;
  }

  returnProductbyId(id:number){
      // return this.ProductData.find(p=> p.id==id);
      return this.http.get(`https://60c76d91afc88600179f5156.mockapi.io/products/${id}`)
  }

  updateProductbyId(id:any, data:any){
  //  data.id=id;
   // var index=this.ProductData.findIndex(p=> p.id==id);
   // this.ProductData[index]= data;
   return this.http.put(`https://60c76d91afc88600179f5156.mockapi.io/products/${id}`,data)
}  
remove(id:number){
//  this.ProductData.splice(id-1,1);
  return this.http.delete(`https://60c76d91afc88600179f5156.mockapi.io/products/${id}`)
}
}
