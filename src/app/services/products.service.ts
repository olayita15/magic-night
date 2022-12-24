import { Injectable } from '@angular/core';
import data from '../../assets/products.json';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  productList:any[]=[]
  categoryList:any[]=[]
  imageCategoryList:any[]=[]
  lengthImageCategoryList:number=1
  productFilterList:any[]=[]
  searchList:any[]=[]
  
  constructor() {
    this.addProduct()
    this.addListCategory()
    this.addImageCategory()
    this.searchList = this.productList
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
    this.lengthImageCategoryList = list.length
  };
  addImageCategory(){
    for(let i = 0 ; i < this.lengthImageCategoryList; i++){
      const found = this.productList.find((element: any) => element.category == this.categoryList[i]);
      this.imageCategoryList.push(found.image)
    }
  }
  addFilterList(category:string){
    return this.productList.filter(productList=>productList.category==category)
  }
  findProduct(id:number){
    return this.productList.find(product=>product.id==id)
  }
  findProductText(text:string){
    console.log(this.productList.find(product=>product.title==text))
    return this.productList.find(product=>product.title==text||product.category==text)
  }
  updatedSearchList(text:string){
    let list:any[]=[];
    list.push(this.findProductText(text))
    this.searchList = list
  }
}
