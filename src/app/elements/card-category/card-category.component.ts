import { Component } from '@angular/core';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss']
})
export class CardCategoryComponent {
  image!:string;
  title!:string;
  text!:string;
  updated!:string;
}
