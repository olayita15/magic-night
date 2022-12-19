import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  url:string='https://api.whatsapp.com/send?phone=573225928238&text=Hola';
  lb:string='%0A';
  constructor() { }

  skipLine(sentence:string){
    this.url=this.url+this.lb+sentence+this.lb;
  }

  sendHelp(product:string):string{
    this.skipLine('Me interesa este producto'+' '+product+' '+'¿Tienes más información al respecto?')
    return this.url
  }


}
