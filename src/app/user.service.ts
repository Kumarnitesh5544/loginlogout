import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserData:Array<any>=[]


  constructor() { }

  addProduct(data:any){
    data.id=this.UserData.length+1;
    this.UserData.push(data);
  }
  returnProduct(){
    return this.UserData;
  }

  returnProductbyId(id:number){
       return this.UserData.find(p=> p.id==id);
  }

  updateProductbyId(id:any, data:any){
    data.id=id;
    var index=this.UserData.findIndex(p=> p.id==id);
    this.UserData[index]= data;
}
}
