import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flujo-confirmacion',
  templateUrl: './flujo-confirmacion.component.html',
  styleUrls: ['./flujo-confirmacion.component.css']
})
export class FlujoConfirmacionComponent implements OnInit {

  //para mostrar en card
  productosCarrito:any[]=[];
  subtotal:number=0;
  costoEnvio:number=0;
  total:number=0;
  direccion:string="";

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
    //Implementar funcionalidad para obtener datos del pedidoTemporal
  }

  aceptar(): void{
    //Implementar funcionalidad
    //limpiando carrito y pedido temporal para ingresar nuevos
    //this.pedidoTemporal.limpiar();
    //this.carritoTemporal.limpiar();

    //redirigiendo a home-page
    this.router.navigate(['home']);
  }

}
