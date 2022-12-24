import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketService } from 'src/app/services/market/market.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private _service:MarketService, 
    private _serviceProduct:ProductsService, 
    private router: Router,
    private route: ActivatedRoute
    ){}
  updateCount(){
    return this._service.purchasedItems 
  }

  searchProducts(input:any): void{
    console.log(input.target.value)
    this._serviceProduct.updatedSearchList(input)
    this.router.navigate(['products'], { relativeTo: this.route });
  }
}
