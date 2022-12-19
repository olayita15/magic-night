import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-cards',
  templateUrl: './slider-cards.component.html',
  styleUrls: ['./slider-cards.component.scss']
})
export class SliderCardsComponent {
  products:Array<any> = [
    {
      image:'https://elaco.vteximg.com.br/arquivos/ids/510173-1000-1464/-elaco-producto-Camisas-blusas-BLANCO-E171900-2.jpg?v=637542365222930000', title: 'Camiseta', prize:40000
    },
    {
      image:'https://http2.mlstatic.com/D_NQ_NP_622327-MCO51042797761_082022-O.jpg', title: 'Falda', prize:60000
    }
    ,
    {
      image:'https://cf.shopee.com.co/file/e6d4e3fc61eec38e4c7a938db2ac7006', title: 'Blusa', prize:55000
    }
    ,
    {
      image:'https://cf.shopee.com.co/file/f1f62c86d6f07aeae4ece47aeaffccc2_tn', title: 'Blusa', prize:55000
    }
    ,
    {
      image:'https://cf.shopee.com.co/file/8869dc1fbb095af31e62aef5c7ec2636_tn', title: 'Blusa', prize:55000
    }
    ,
    {
      image:'https://www.gef.co/dx/api/dam/custom/CrystalCo_CAT_AS/2021/gef/es-co/imagenes/mujeres/pantalones/nahe/566x715/pantalon-mujer-nahe-denim-blanco-40235-frente-gef.jpg', title: 'Blusa', prize:55000
    }
  ]
}
