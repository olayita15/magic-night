import { Component } from '@angular/core';
import { MarketService } from 'src/app/services/market/market.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _service:MarketService)
  {
    
  }
  updateCount(){
    return this._service.purchasedItems 
  }
}
