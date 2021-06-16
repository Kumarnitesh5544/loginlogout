import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators}  from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  fb:FormBuilder=new FormBuilder ;
  UserForm:any;
  constructor(private userService: UserService , private route:Router) { }

  ngOnInit(): void {
    this.UserForm = this.fb.group({
      "UserName" :this.fb.control("",Validators.required),
      "Id1" :this.fb.control(0,Validators.required),
    "Bill" :this.fb.control(0,[Validators.min(0),Validators.max(50000)]),
      "Type" : this.fb.control("")
    })

  }
  submitForm(){
    
  //  this.userService.addProduct(this.UserForm.value);
  // this.route.navigate(["./user"]);
   this.userService.addProduct(this.UserForm.value).subscribe((res)=>{
    this.route.navigate(["./dashboard-container/user"]);
  })
//  this.
  }

}
