import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { PedidoTemporalService } from 'src/app/services/pedido-temporal.service';

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

  constructor(private router:Router,
              private pedidoTemporal: PedidoTemporalService,
              private carritoTemporal: CarritoService) { }

  ngOnInit(): void {
    this.productosCarrito=this.pedidoTemporal.getProductosCarrito();
    this.subtotal=this.pedidoTemporal.getSubtotal();
    this.costoEnvio=this.pedidoTemporal.getCostoEnvio();
    this.total=this.pedidoTemporal.getTotal();
    this.direccion=this.pedidoTemporal.getDireccion();
  }

  aceptar(): void{
    //limpiando carrito y pedido temporal para ingresar nuevos
    this.pedidoTemporal.limpiar();
    this.carritoTemporal.limpiar();
    //redirigiendo a home-page
    this.router.navigate(['home']);
  }

}
