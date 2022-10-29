import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

//para el modal
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-producto-home',
  templateUrl: './producto-home.component.html',
  styleUrls: ['./producto-home.component.css'],
  //para el modal
  providers: [NgbModalConfig, NgbModal],
})
export class ProductoHomeComponent implements OnInit {
  @Input() nombreProducto!:string;
  @Input() precioProducto!:number;
  @Input() descuentoProducto!:number;
  @Input() precioFinal!:number;
  @Input() photoURL!:string;
  @Input() idProducto!:string;

  showMainContent: Boolean = true;

  constructor(
    private modalService: NgbModal,
    config: NgbModalConfig,
    private router: Router,
    private carritoService: CarritoService
  ) { 
    config.size = 'xl';
    config.scrollable = true;
  }

  //para el modal
  closeResult: string = '';
  productosModal: any[] = [];
  subtotal: number = 0;

  //para ocultar y mostrar botones del card de producto
  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
  }

  ngOnInit(): void {
    this.productosModal = this.carritoService.getProductosCarrito();
  }

  enrutarDetalleProducto(){
    this.router.navigate(['producto',this.idProducto]);
  }

  //para el modal
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

  cerrar(): void {
    this.modalService.dismissAll();
    this.router.navigate(['flujo-detalles']);
  }

  anhadirProcutoCarrito() {
    var producto = {
      nombre: this.nombreProducto,
      photoURL: this.photoURL,
      idProducto: this.idProducto,
      precio: this.precioProducto,
      preciofinal: this.precioFinal,
      descuento: this.descuentoProducto,
      cantidad: 1,
    };

    this.carritoService.agregarProductoCarrito(producto);

    this.subtotal = 0;

    this.productosModal.forEach((prod) => {
      this.subtotal = this.subtotal + prod.preciofinal * prod.cantidad;
    });

    this.productosModal = this.carritoService.getProductosCarrito();
    console.log(this.productosModal);
  }

  operacionUnidadProductoCarrito(idProductoOperacion:string,operacion: string) {
    this.carritoService.operacionUnidadProductoCarrito(
      idProductoOperacion,
      operacion
    );

    this.subtotal = 0;
    this.productosModal.forEach((prod) => {
      this.subtotal = this.subtotal + prod.preciofinal * prod.cantidad;
    });
  }

  eliminarProductoCarrito(idProducto:string){
    console.log(idProducto)
    this.carritoService.eliminarProductoCarrito(idProducto);
    this.productosModal = this.carritoService.getProductosCarrito();
    this.subtotal = 0;
    this.productosModal.forEach((prod) => {
      this.subtotal = this.subtotal + prod.preciofinal * prod.cantidad;
    });
    console.log(this.productosModal);
  }

  seguirComprando():void{
    this.modalService.dismissAll();
    this.router.navigate(['productos']);
  }

}
