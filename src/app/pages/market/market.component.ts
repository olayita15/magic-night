import { Component } from '@angular/core';
import { MarketService } from 'src/app/services/market/market.service';
import { WhatsappService } from 'src/app/services/whatsapp/whatsapp.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  products:any[]=[]
  totalPrize:number=0;
  textTotalPrize:string=''
  constructor(private _service:MarketService, private _wService:WhatsappService)
  {
    this.products=_service.shoppingCartList
    this.updateTotalPrize()
  }
  updateTotalPrize(){
    let count:number=0;
    this.products.forEach(element => {
      count +=element.prize
    });
    this.totalPrize=count;
    return this.totalPrize
  }

  sendBuy(){
    console.log(this._wService.sendPurchases(this.products))
    return this._wService.sendPurchases(this.products)
  }

  removeProduct(id:number){
    this._service.removeProduct(id)
  }


}
