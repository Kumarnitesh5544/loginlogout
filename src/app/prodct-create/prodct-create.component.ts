import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators}  from '@angular/forms';
import { Router } from '@angular/router';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-prodct-create',
  templateUrl: './prodct-create.component.html',
  styleUrls: ['./prodct-create.component.css']
})
export class ProdctCreateComponent implements OnInit {
  fb:FormBuilder=new FormBuilder ;
  ProductForm:any;
  constructor(private ProductService: ProductService , private route:Router) { }

  ngOnInit(): void {
    this.ProductForm = this.fb.group({
      "ProductName" :this.fb.control("",Validators.required),
      "Price" :this.fb.control(0,Validators.required),
      "Discount" :this.fb.control(0,[Validators.min(0),Validators.max(5)]),
      "Type" : this.fb.control("")
    })
 
  }
  submitForm(){
    
    
    this.ProductService.addProduct(this.ProductForm.value).subscribe((res)=>{
      this.route.navigate(["./dashboard-container/product"]);
    })

  }

}

