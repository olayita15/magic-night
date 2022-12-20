import { Component, Input, OnInit } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp/whatsapp.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit{
  url:string| undefined;
  @Input() image:string | undefined;
  @Input() title!: string;
  @Input() prize:number | undefined;
  constructor(private _servicio:WhatsappService, private _productService:ProductsService) {}
  ngOnInit(): void {
    
  }

  helpInformation(){
    this._servicio.sendHelp(this.title)
    this.url = this._servicio.url
  }

  test(){
    console.log(this._productService.productList)
  }

}
