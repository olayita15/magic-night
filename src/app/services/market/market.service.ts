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
    console.log(this.shoppingCartList)
    this.purchasedItems=this.shoppingCartList.length
    console.log(this.purchasedItems)
  }

}
