import { Component, OnInit } from '@angular/core';
import {ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	allProducts:any = [];
	success: string;
  constructor(private _products: ProductsService) { }

  ngOnInit() {
  	this.getProducts();
  }

  getProducts(){
  	let obervable = this._products.getProducts();
  	obervable.subscribe(data => {
  		this.allProducts = data;
  		console.log(data);
  	});

  }

  onDelete(string: string) {
  	console.log("On delete happening")
  		this.success = string
    	this.getProducts();
  	}

}
