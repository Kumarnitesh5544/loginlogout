import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators}  from '@angular/forms';
import{ActivatedRoute, Router}  from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  fb:FormBuilder=new FormBuilder ;
  ProductForm:any;
  currentId: any;
  currentuserdata:any;
  constructor(private activeRoute:ActivatedRoute , private ProductService:ProductService , private route:Router) {
        this.currentId=activeRoute.snapshot.params.id;
   }
   
  ngOnInit(): void {
    //let currentuserdata=this.ProductService.returnProductbyId(this.currentId);
   
  
    
    this.ProductForm = this.fb.group({
      "ProductName" :this.fb.control("",Validators.required),
      "Price" :this.fb.control(0,Validators.required),
      "Discount" :this.fb.control(0,[Validators.min(0),Validators.max(5)]),
      "Type" : this.fb.control("")
    })
  
  this.ProductService.returnProductbyId(this.currentId).subscribe((res)=>{
    this.currentuserdata=res
    
     this.ProductForm.patchValue(this.currentuserdata)
  })
}
    updateForm(){


this.ProductService.updateProductbyId(this.currentId , this.ProductForm.value).subscribe(()=>{
  this.route.navigate(["/dashboard-container/product"]);

})
    }
}
