import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	@Input() curProduct:any;
	@Output() deleted = new EventEmitter<string>();
  constructor(private _router: Router, private _products: ProductsService) { }

  ngOnInit() {

  }

  editItem(){
  	this._router.navigate(['edit', this.curProduct._id])
  }

  deleteProduct(id){
  	console.log("deleting," id);

  	let observable = this._products.deleteProduct(id);
  	observable.subscribe(data => console.log(data));
  		this.deleted.emit("success");
  	
  }

}
