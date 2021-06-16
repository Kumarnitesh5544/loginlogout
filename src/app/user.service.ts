import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserData:Array<any>=[]

  constructor(private http: HttpClient) { }

  addProduct(data:any){

    return this.http.post(`https://60c76d91afc88600179f5156.mockapi.io/user`,data);
  }
  returnProduct(){

    return this.http.get(`https://60c76d91afc88600179f5156.mockapi.io/user`);
  }

  returnProductbyId(id:number){
   
      return this.http.get(`https://60c76d91afc88600179f5156.mockapi.io/user/${id}`);
  }

  updateProductbyId(id:any, data:any){

   return this.http.put(`https://60c76d91afc88600179f5156.mockapi.io/user/${id}`,data);
 
}
remove(id:number){

 return this.http.delete(`https://60c76d91afc88600179f5156.mockapi.io/user/${id}`);
}
}
