import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  screenWidth:any;
  responsive:boolean=true;
  constructor(private _service:ProductsService)
  {
    
  }
  categorys = this._service.categoryList;
  firstCategory = this._service.categoryList[0];
  firstImageCategory = this._service.imageCategoryList[0];
  ImageCategory = this._service.imageCategoryList;
  video = "https://v16-webapp.tiktok.com/7dee708f67cf1fd4a28156863ce523b5/63c06ecd/video/tos/maliva/tos-maliva-ve-0068c800-us/a61e0d5653934162808cfafe6f2ce729/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=2764&bt=1382&cs=0&ds=3&ft=4b~OyMM88Zmo0m9ey64jVp20JpWrKsdm&mime_type=video_mp4&qs=0&rc=OTo7aWg7M2RpZ2k6ZTU6ZUBpamV0ZWQ6ZjNnOzMzNzczM0A2NGI1LWE1NTExNWAxMzExYSNval5wcjRfZWxgLS1kMTZzcw%3D%3D&l=2023011214340405A3F8FD21D0571DF8A8&btag=80000"
  
}
