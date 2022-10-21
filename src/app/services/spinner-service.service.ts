import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerServiceService {

  constructor() { }

  flagSpinner: boolean=false;

  mostrarSpinner(){
    this.flagSpinner=true;
  }

  ocultarSpinner(){
    this.flagSpinner=false;
  }
}
