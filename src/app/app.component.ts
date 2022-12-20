import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private _service:ProductsService){}
  title = 'magic-night';
  ngOnInit(): void {
    this._service.ngOnInit()
  }
}
