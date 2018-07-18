import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts(){
  	// one way
  	// this._http.get('api/tasks').toPromise().then(data => console.log(data))
  	console.log('getting products')
  	//platform way
  	// let tempObservable = this._http.get('/api/tasks');
  	// // console.log(tempObservable);
  	// tempObservable.subscribe(data => console.log("Got our tasks!", data));
  	// console.log('a thing');
  	return this._http.get('/api/products');
  }

  getProduct(id){
  	return this._http.get('/api/products/' + id);
  }

  addProduct(product){
    return this._http.post('/api/products', product)
  }

  updateProduct(product, data){
  	console.log("data:", product, data);
  	return this._http.patch('/api/products/'+product, data)
  }

  deleteProduct(product){
  	console.log("delete api", product)
  	return this._http.delete('/api/products/'+ product);
  }
}
