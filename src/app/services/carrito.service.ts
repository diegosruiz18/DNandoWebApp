import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  carritoTemporal: any[] = [];

  subtotalCarritoTemporal: number = 0;

  constructor() { }

  agregarProductoCarrito(Producto: any) {
    //Buscamos si el producto ya existe, caso contrario se agrega uno nuevo en el carrito

    for (let i = 0; i < this.carritoTemporal.length; i++) {
      if (this.carritoTemporal[i].idProducto === Producto.idProducto) {
        this.carritoTemporal[i].cantidad += 1;
        return;
      }
    }
    this.carritoTemporal.push(Producto);
  }

  eliminarProductoCarrito(idProductoCarrito: string) {
    for (let i = 0; i <= this.carritoTemporal.length; i++) {
      if (this.carritoTemporal[i].idProducto === idProductoCarrito) {
        this.carritoTemporal = this.removeItemFromArr(this.carritoTemporal, this.carritoTemporal[i]);
        return true;
      }
    }
    return false;
  }

  removeItemFromArr(arr: any[], item: any) {
    return arr.filter((e) => e !== item);
  }

  operacionUnidadProductoCarrito(idProductoCarrito: string, tipo: string) {
    for (let i = 0; i < this.carritoTemporal.length; i++) {
      if (this.carritoTemporal[i].idProducto === idProductoCarrito) {
        if (tipo === 'suma') {
          this.carritoTemporal[i].cantidad += 1;
          return true;
        } else {
          if (this.carritoTemporal[i].cantidad <= 1) {
            return false;
          } else {
            this.carritoTemporal[i].cantidad -= 1;
            return true;
          }
        }
      }
    }
    return true;
  }

  get_cantidad_de_un_producto(idProductoCarrito: string){
    for (let i = 0; i < this.carritoTemporal.length; i++) {
      if (this.carritoTemporal[i].idProducto === idProductoCarrito) {
        return this.carritoTemporal[i].cantidad;
      }
    }
  }

  getProductosCarrito() {
    return this.carritoTemporal;
  }

  getSubtotal() {
    this.carritoTemporal.forEach((prod) => {
      this.subtotalCarritoTemporal += prod.preciofinal * prod.cantidad;
    });
  }

  limpiar():void{
    this.carritoTemporal=[];
    this.subtotalCarritoTemporal=0;
  }
}
