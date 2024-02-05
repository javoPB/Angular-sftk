import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDatailsComponent } from './product-datails/product-datails.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDatailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
    ProductDatailsComponent
  ]
})
export class ProductBrowserModule { }
