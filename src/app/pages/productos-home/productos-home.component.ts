import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos-home',
  templateUrl: './productos-home.component.html',
  styleUrls: ['./productos-home.component.css']
})
export class ProductosHomeComponent implements OnInit {

  productos: any[]= [];
  documentos: any[]=[];
  contadorLimite: number=0;

  constructor(
    private productoService: ProductosService,
  ) { }

  ngOnInit(): void {
    //Cargamos los productos en una lista de productos inicial
    this.productoService.getProductos().subscribe((querysnapshot)=>{
      this.productos = []
      querysnapshot.forEach((doc)=>{
        this.productos.push(doc);
      })
      console.log(this.productos);
    });
  }

}
