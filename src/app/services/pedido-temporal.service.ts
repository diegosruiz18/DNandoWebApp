import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoTemporalService {

  pedidoCarritoTemporal:any[]=[]; //arreglo de productos
  //para mostrar en pantalla
  subtotalCarritoTemporal:number=0;
  totalCarritoTemporal:number=0;
  costoEnvio:number=0;
  direccion:string="";




  constructor() { }

  agregarPedidoTemporal(productosCarrito:any[],subtotal:number,
    totalCarrito:number,costoEnvio:number,direccion:string){
    this.pedidoCarritoTemporal=productosCarrito;
    this.subtotalCarritoTemporal=subtotal;
    this.totalCarritoTemporal=totalCarrito;
    this.costoEnvio=costoEnvio;
    this.direccion=direccion;
  }

  getProductosCarrito():any{
    return this.pedidoCarritoTemporal;
  }

  getSubtotal():any{
    return this.subtotalCarritoTemporal;
  }

  getTotal():any{
    return this.totalCarritoTemporal;
  }
  
  getCostoEnvio():any{
    return this.costoEnvio;
  }

  getDireccion():any{
    return this.direccion;
  }

  limpiar():void{
    this.pedidoCarritoTemporal=[];
    this.subtotalCarritoTemporal=0;
    this.totalCarritoTemporal=0;
    this.costoEnvio=0;
    this.direccion="";
  }
}