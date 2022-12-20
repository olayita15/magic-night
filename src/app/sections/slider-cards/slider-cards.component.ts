import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-slider-cards',
  templateUrl: './slider-cards.component.html',
  styleUrls: ['./slider-cards.component.scss']
})
export class SliderCardsComponent {
  constructor(private _service:ProductsService){}
  products = this._service.productList
}
