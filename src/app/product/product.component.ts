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
  constructor(private  ProductService :ProductService) { }

  ngOnInit(): void {
  this.productList=(this.ProductService.returnProduct());
  }

}
