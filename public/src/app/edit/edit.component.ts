import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
curProduct: any;
errors: any;
  constructor(private _products: ProductsService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	this.curProduct = {title: "", price: "", imageUrl: ""};
  	 this._route.params.subscribe((params: Params) => {
  		this.getProduct(params['id']);
  		console.log("Id:", params['id'])


  	});

  	console.log(this.curProduct);
 
  }

  getProduct(id){
  	let observable = this._products.getProduct(id);
  	observable.subscribe(data => {
  		console.log("Data:", data);
  		this.curProduct = data;
  	});
  }

  editProduct(id, data){
  	let observable = this._products.updateProduct(id, data);
  	observable.subscribe(data => {
      this.errors = data["message"];
     console.log(data)
   });

  	this._router.navigate(['/products']);
  }

}
