import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  url:string='https://api.whatsapp.com/send?phone=573225928238&text=Hola';
  lb:string='%0A';
  constructor() { }

  skipLine(sentence:string){
    const urlBase = 'https://api.whatsapp.com/send?phone=573225928238&text=Hola';
    this.url=urlBase.concat(this.lb,sentence,this.lb);
  }

  sendHelp(product:string):string{
    this.skipLine('Me interesa el producto'+' '+product+' '+'¿Tienes más información al respecto?')
    return this.url
  }
  
  sendPurchases(list:any[]):string{
    let urlNew:string='';
    let greeting = this.lb+'Quisiera comprar los siguientes elementos:'
    list.forEach(element => {
      urlNew=urlNew+this.lb+element.title
    });
    console.log(urlNew)
    return this.url+greeting+urlNew
  }
}
