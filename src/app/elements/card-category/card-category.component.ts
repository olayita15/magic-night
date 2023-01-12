import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class CardCategoryComponent {
  @Input() image!:string;
  @Input() title!:string;
  @Input() text!:string;
  @Input() updated!:string;
  @Input() video!:string;
  @Input() description!:string;
}
