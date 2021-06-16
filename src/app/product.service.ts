import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    ProductData:Array<any>=[]
    
  constructor(private http:HttpClient) { }
  addProduct(data:any){

   return this.http.post(`https://60c76d91afc88600179f5156.mockapi.io/products`,data)
  }
  returnProduct(){
      return this.http.get(`https://60c76d91afc88600179f5156.mockapi.io/products`)
 
  }

  returnProductbyId(id:number){
     
      return this.http.get(`https://60c76d91afc88600179f5156.mockapi.io/products/${id}`)
  }

  updateProductbyId(id:any, data:any){

   return this.http.put(`https://60c76d91afc88600179f5156.mockapi.io/products/${id}`,data)
}  
remove(id:number){

  return this.http.delete(`https://60c76d91afc88600179f5156.mockapi.io/products/${id}`)
}
}
