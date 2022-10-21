import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootercontrollerService {

  constructor() { }

  controller:boolean=true;

  esconderFooter(){
    this.controller = false;
  }

  mostrarFooter(){
    this.controller=true;
  }
}
