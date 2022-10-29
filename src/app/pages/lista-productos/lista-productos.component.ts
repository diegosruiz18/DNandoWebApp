import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  idDocumento: string = 'sinID';
  infoProducto: any = '';

  productoSeleccionado!:string;

  constructor(
    private rutaActiva: ActivatedRoute,
    private productoService: ProductosService
  ) { }

  ngOnInit(): void {
    this.idDocumento = this.rutaActiva.snapshot.params['id'];
    this.productoService
      .getProductoEspecifico(this.idDocumento)
      .subscribe((querysnapshot) => {
        this.infoProducto = querysnapshot;
      });
  }

  mostrarProductosAbarrotes():void{
    this.productoSeleccionado="Abarrotes";
  }

  mostrarProductosSnacks():void{
    this.productoSeleccionado="Snacks";
  }

  mostrarProductosLacteosBebidas():void{
    this.productoSeleccionado="Lacteos y bebidas";
  }

  mostrarProductosHigiene():void{
    this.productoSeleccionado="Higiene y limpieza";
  }

  mostrarProductosGolosinas():void{
    this.productoSeleccionado="Golosinas";
  }

}
