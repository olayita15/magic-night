import { Injectable, OnInit } from '@angular/core';
import data from '../../assets/products.json';

@Injectable({
  providedIn: 'root'
})

export class ProductsService implements OnInit {
  productList:any =[]
  categoryList:any =[]
  imageCategoryList:any=[]
  constructor() {}

  ngOnInit(): void {
    this.addProduct()
    this.addListCategory()
    console.log(this.categoryList)
    this.addImageCategory()
    console.log(this.imageCategoryList)
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

  addImageCategory(){
    console.log(this.addListCategory.length)
    for(let i = 0 ; i < 7; i++){
      const found = this.productList.find((element: any) => element.category == this.categoryList[i]);
      this.imageCategoryList.push(found.image)
    }
  }
}
