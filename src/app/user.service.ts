import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserData:Array<any>=[]

  constructor(private http: HttpClient) { }

  addProduct(data:any){
   // data.id=this.UserData.length+1;
    //this.UserData.push(data);
    return this.http.post(`https://60c76d91afc88600179f5156.mockapi.io/user`,data);
  }
  returnProduct(){
   // return this.UserData;
    return this.http.get(`https://60c76d91afc88600179f5156.mockapi.io/user`);
  }

  returnProductbyId(id:number){
      // return this.UserData.find(p=> p.id==id);
      return this.http.get(`https://60c76d91afc88600179f5156.mockapi.io/user/${id}`);
  }

  updateProductbyId(id:any, data:any){
   // data.id=id;
   // var index=this.UserData.findIndex(p=> p.id==id);
   // this.UserData[index]= data;
   return this.http.put(`https://60c76d91afc88600179f5156.mockapi.io/user/${id}`,data);
 
}
remove(id:number){
 // this.UserData.splice(id-1,1);
 return this.http.delete(`https://60c76d91afc88600179f5156.mockapi.io/user/${id}`);
}
}
