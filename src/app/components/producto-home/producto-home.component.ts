import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-home',
  templateUrl: './producto-home.component.html',
  styleUrls: ['./producto-home.component.css']
})
export class ProductoHomeComponent implements OnInit {

  @Input() nombreProducto!:string;
  @Input() precioProducto!:number;
  @Input() descuentoProducto!:number;
  @Input() precioFinal!:number;
  @Input() photoURL!:string;
  @Input() idProducto!:string;

  showMainContent: Boolean = true;

  constructor() { }

  //para ocultar y mostrar botones del card de producto
  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
  }

  ngOnInit(): void {
  }

}
