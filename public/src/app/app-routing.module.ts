import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {EditComponent } from './edit/edit.component';
import {NewComponent } from './new/new.component';
import {ProductsComponent } from './products/products.component';
import {ProductComponent } from './product/product.component';

const routes: Routes = [
	{path: 'new', component: NewComponent},
	{path: 'products', component: ProductsComponent},
	{path: 'edit/:id', component: EditComponent }
	{path: '',pathMatch: 'full', component: HomeComponent},
	// {path: '/', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
