import { Component, Input } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp/whatsapp.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  url:string| undefined;
  @Input() image:string | undefined;
  @Input()title!: string;
  @Input() prize:string | undefined;
  constructor(private _servicio:WhatsappService) {}

  helpInformation(){
    this._servicio.sendHelp(this.title)
    this.url = this._servicio.url
  }

}
