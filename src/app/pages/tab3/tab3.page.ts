import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  consignar:number;
  retirar:number;
  laPlata:number;

  constructor() {
    this.laPlata=0;
    this.consignar=0;
    this.retirar=0;
  }

  consignarPlata(){
    if(this.consignar>0 || this.consignar==undefined || this.consignar==null){
      this.laPlata=this.laPlata+this.consignar;
      alert("Consignacion realizada")
    }
    else{
      alert("META PLATA PRIMERO >:v")
    }
    this.consignar=0;

  }
  retirarPlata(){

    if(this.retirar>0 || this.retirar==undefined || this.retirar==null){
      this.laPlata=this.laPlata-this.retirar;
      alert("Retiro realizado")
    }
    else{
      alert("ESCRIBA BIEN LO QUE QUIERE RETIRAR -.-")
    }
    this.retirar=0;
  }


}
