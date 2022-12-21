import { Component, Input } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp/whatsapp.service';
import { ProductsService } from '../../services/products.service';
import { MarketService } from 'src/app/services/market/market.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent{
  url:string| undefined;
  @Input() id:number|any;
  @Input() image:string | undefined;
  @Input() title!: string;
  @Input() prize:number | undefined;
  constructor(private _servicio:WhatsappService, 
    private _productService:ProductsService, 
    private _marketService:MarketService) {}

  helpInformation(){
    this._servicio.sendHelp(this.title)
    this.url = this._servicio.url
  }

  addProduct(){
    this._marketService.addProduct(this.id)
  }

}
