import { Injectable, OnInit } from '@angular/core';
import data from '../../assets/products.json';

@Injectable({
  providedIn: 'root'
})

export class ProductsService implements OnInit {
  productList:any =[]
  categoryList:any =[]
  constructor() { 
  }

  ngOnInit(): void {
    this.addProduct()
    this.addListCategory()
    console.log(this.categoryList)
  }
  
   addProduct(){
    this.productList = data
    console.log(this.productList)
  }

  addListCategory(){
    this.productList.forEach((element: { category: any; }) => {
      this.categoryList.push(element.category)
    });
    const list = this.categoryList.filter((v: any, i: any) => {
      return this.categoryList.indexOf(v) === i;
    })
    this.categoryList = list
  };
}
