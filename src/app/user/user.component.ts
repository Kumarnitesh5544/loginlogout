import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{UserService} from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList :Array<any> =[];
  constructor(private UserService :UserService) { }

  ngOnInit(): void {
  //this.userList=(this.UserService.returnProduct());
  this.load();
 // }
  }
    load(){
      this.UserService.returnProduct().subscribe((res:any)=>{
        this.userList=res;
      })
    }

  deleteform(i:number){
//    console.log(i);
  //  this.UserService.remove(i);
  this.UserService.remove(i).subscribe(()=>{
    this.load();
  })
  }
}
