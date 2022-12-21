import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productCategoryList:any[]=[]
  constructor(private route:ActivatedRoute, private _service:ProductsService){
    this.route.params.subscribe(params=>{
      this.productCategoryList=this._service.addFilterList(params["category"])
      console.log(this.productCategoryList)
    })
  }
}
