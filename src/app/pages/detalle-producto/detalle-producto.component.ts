import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  idDocumento: string = 'sinID';
  infoProducto: any = '';

  opcion:string="";
  productos: any[]= [];
  documentos: any[]=[];
  contadorLimite: number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
