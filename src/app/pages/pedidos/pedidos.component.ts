import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  opcionElegida: boolean = true;

  constructor(
    //private pedidosService: PedidosService
  ) {}

  pedidos: any[] = [];
  pedidosActivos: any[] = [];
  estadoTemporal!: string;

  idPedidoTemporal!: string;
  pedidoTemporal!: any;

  ngOnInit(): void {
    //Implementar:
    /**
    this.pedidosService.getPedidos().subscribe((querysnapshot) => {
      this.pedidos = [];
      querysnapshot.forEach((doc) => {
        this.pedidos.push(doc);
      });
      this.pedidosActivos = []
      this.pedidos.forEach((element) => {
        if (element.payload.doc.data().estado == 'Solicitado') {
          this.pedidosActivos.push(element);
        }
      });
    });
    */
    
  }

  cambiarOpcionElegida() {
    this.opcionElegida = !this.opcionElegida;
  }

  cambiarEstadoPedidoEspecifico(
    //idPedido:string,nuevoEstado:string
    ){
    //this.pedidosService.modificarPedidoEspecifico(idPedido,nuevoEstado)
  }

  setEstadoTemporal(
    //temp:string
    ){
    //this.estadoTemporal = temp;
  }

  setPedidoTemporal(
    //idPedidoTemporal:string
    ){
    //Implementar:
    /**
    this.idPedidoTemporal = idPedidoTemporal;
    this.pedidosService.getPedidoEspecifico(idPedidoTemporal).subscribe((el)=>{
      this.pedidoTemporal=el
    })
    */
    
  }

}
