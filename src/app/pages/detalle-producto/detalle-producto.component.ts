import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

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

        //Cargamos los productos por categoria en una lista de productos inicial
        this.productoService.getProductosCategoria(this.infoProducto.categoria).subscribe((querysnapshot)=>{
          this.productos = [];
          querysnapshot.forEach((doc)=>{
            this.productos.push(doc);
          })
        });
      });
  }

  seleccionarDetalles(){
    this.opcion="detalles";
  }

  seleccionarProductosSimilares(){
    this.opcion="productosSimilares";
  }
}