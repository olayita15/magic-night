import { Component, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { ProductsService } from './services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _service:ProductsService){}
  title = 'magic-night';
  
}
