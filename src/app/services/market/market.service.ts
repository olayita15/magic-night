import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { WhatsappService } from '../whatsapp/whatsapp.service';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  shoppingCartList:any[]=[]
  purchasedItems:number=0;
  constructor(private _service:ProductsService, private _wService:WhatsappService) { }
  addProduct(id:number){
    this.shoppingCartList.push(this._service.findProduct(id))
    alert('Se agregó el item')
    this.purchasedItems=this.shoppingCartList.length
  }
  findProduct(id:number){
    return this.shoppingCartList.find(product=>product.id==id)
  }
  removeProduct(id:number){
    this.shoppingCartList.splice(this.shoppingCartList.indexOf(this.findProduct(id)),1)
    this.purchasedItems=this.shoppingCartList.length
  }
}
