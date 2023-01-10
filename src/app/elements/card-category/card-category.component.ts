import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss']
})
export class CardCategoryComponent {
  @Input() image!:string;
  @Input() title!:string;
  @Input() text!:string;
  @Input() updated!:string;
}
