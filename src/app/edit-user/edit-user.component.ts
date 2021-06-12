import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators}  from '@angular/forms';
import{ActivatedRoute, Router}  from '@angular/router'
import {UserService} from '../user.service'
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  fb:FormBuilder=new FormBuilder ;
  UserForm:any;
  currentId: any;
  constructor(private activeRoute:ActivatedRoute , private userService:UserService , private route:Router) {
        this.currentId=activeRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    let currentuserdata=this.userService.returnProductbyId(this.currentId);
    this.UserForm = this.fb.group({
      "UserName" :this.fb.control("",Validators.required),
      "Id" :this.fb.control(0,Validators.required),
      "Bill" :this.fb.control(0,[Validators.min(0),Validators.max(50000)]),
      "Type" : this.fb.control("")
    })
  this.UserForm.patchValue(currentuserdata);
  }

    updateForm(){
  this.userService.updateProductbyId(this.currentId , this.UserForm.value);
  this.route.navigate(["/user"]);
    }
}
