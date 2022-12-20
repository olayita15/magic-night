import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  constructor(private _service:ProductsService){}
  categorys = this._service.categoryList;
  firstCategory = this._service.categoryList[0];
  firstImageCategory = this._service.imageCategoryList[0];
  ImageCategory = this._service.imageCategoryList;
}
