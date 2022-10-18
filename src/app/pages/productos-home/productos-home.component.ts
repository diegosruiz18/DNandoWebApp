import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-home',
  templateUrl: './productos-home.component.html',
  styleUrls: ['./productos-home.component.css']
})
export class ProductosHomeComponent implements OnInit {

  productos: any[]= [];
  documentos: any[]=[];
  contadorLimite: number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
