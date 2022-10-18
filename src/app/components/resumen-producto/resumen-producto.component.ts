import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-producto',
  templateUrl: './resumen-producto.component.html',
  styleUrls: ['./resumen-producto.component.css']
})
export class ResumenProductoComponent implements OnInit {
  
  @Input() idProducto!: string;
  @Input() nombreProducto!: string;
  @Input() precio!: number;
  @Input() preciofinal!: number;
  @Input() photoURL!: string;
  @Input() descuento!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
