import { Component, OnInit } from '@angular/core';
import {ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _products: ProductsService, private _router: Router) { }
 	curProduct: any;
   errors: String;

  ngOnInit() {
  	this.curProduct = {name: "", price: "", imageUrl: "https://www.unesale.com/ProductImages/Large/notfound.png"}
  }

  addProduct(){
  	let observable = this._products.addProduct(this.curProduct);
  	observable.subscribe(data => {
      console.log(data);
      this.errors = data["message"]
    });

  	// this._router.navigate(['products']);
  }

}
