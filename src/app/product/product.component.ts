import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{ ProductService} from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    productList :Array<any> =[];
    
 // constructor(private activatedRoute:ActivatedRoute , private  ProductService :ProductService) { }
 constructor( private  ProductService :ProductService) { }

  ngOnInit(): void {
    
  //  this.productList=this.ProductService.returnProductbyId(this.activatedRoute.snapshot.params.id);
  //this.productList=(this.ProductService.returnProduct());
  this.load();

  }
  load(){
    this.ProductService.returnProduct().subscribe((res:any)=>{
      this.productList=res;
    });
  }
  deleteform(i:number){
 //   console.log(i);
   // this.ProductService.remove(i);
    this.ProductService.remove(i).subscribe(()=>{
        this.load();
    })
  }
}