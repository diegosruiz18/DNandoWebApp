import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CarritoService } from 'src/app/services/carrito.service';
import { PedidoTemporalService } from 'src/app/services/pedido-temporal.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-flujo-detalle-pedido',
  templateUrl: './flujo-detalle-pedido.component.html',
  styleUrls: ['./flujo-detalle-pedido.component.css']
})

export class FlujoDetallePedidoComponent implements OnInit {

  //para modales
  modalsNumber:number = 0;

  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private carritoService: CarritoService,
              private pedidoService: PedidosService,
              private pedidoTemporalService: PedidoTemporalService,
              private modalService: NgbModal,
              config: NgbModalConfig,) {
                config.size = 'md';
                config.scrollable = true;
                config.centered=true;
  }

  //para el carrito
  productosModal: any[] = [];
  subtotal: number = 0;
  costoEnvio: number = 1.20;
  total: number = 0;

  //para agregar a pedido en bd
  pedidos:any[]=[];
  public documentId:any;

  indice:any=null;

  ngOnInit(): void {
    //obteniendo el carrito
    this.productosModal = this.carritoService.getProductosCarrito();
    this.subtotal = 0;
    //calculando el subtotal
    this.productosModal.forEach((prod) => {
      this.subtotal = this.subtotal + prod.preciofinal * prod.cantidad;
    });
    //calculando el total
    this.total=this.subtotal+this.costoEnvio;
    //validacion de formulario
    this.formLogin = this.formBuilder.group({
      nombre: ['', [
          Validators.required
        ]
      ],
      telefono: ['', [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      email: ['', [
          Validators.required,
          Validators.email
        ]
      ],
      direccion: ['', [
          Validators.required
        ]
      ]
    });
  }

  send(): any {
    console.log(this.formLogin.value);
    //Implementar funcionalidad para el carrito de productos: 
    //agregando al servicio de pedido temporal para mostrar en ventana de confirmacion
    this.pedidoTemporalService.agregarPedidoTemporal(this.productosModal,this.subtotal,
      this.total,this.costoEnvio,this.formLogin.value.direccion);
    //agregando a BD 
    this.agregarPedido();
    //cerrando modal
    this.modalService.dismissAll();
    //navegando a flujo de confirmacion
    this.router.navigate(['flujo-confirmacion']);
  }

  regresar():void{
    //cerrando modal
    this.modalService.dismissAll();
    //navegando a homepage
    this.router.navigate(['home']);
  }

  agregarPedido() {
    let data = {
      nombrePersona: this.formLogin.value.nombre, 
      correoPersona: this.formLogin.value.email,
      telefono: this.formLogin.value.telefono,
      direccion: this.formLogin.value.direccion,
      carritoPedido: this.productosModal,
      costoEnvio: this.costoEnvio,
      subtotal: this.subtotal,
      total: this.total,
      estado: "Solicitado"
    }
    //agregando a BD
    this.pedidoService.agregarPedido(data).then(() => {
      console.log('Documento creado exitosamente!');
      /* obteniendo los registros de BD
      this.pedidoService.getPedidos().subscribe((pedidoSnapshot) => {
        this.pedidos = [];
        pedidoSnapshot.forEach((pedidoData: any) => {
          this.pedidos.push({
            id: pedidoData.payload.doc.id,
            data: pedidoData.payload.doc.data()
          });
        })
      });
      */
    }, (error) => {
      console.error(error);
    });
  }

  //para los modales

  closeResult: string = '';

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}