import { query } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

//para el modal
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';
//para cambiar de pagina
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-resumen-producto',
  templateUrl: './resumen-producto.component.html',
  styleUrls: ['./resumen-producto.component.css'],
  //para el modal
  providers: [NgbModalConfig, NgbModal],
})
export class ResumenProductoComponent implements OnInit {
  @Input() idProducto!: string;
  @Input() nombreProducto!: string;
  @Input() precio!: number;
  @Input() preciofinal!: number;
  @Input() photoURL!: string;
  @Input() descuento!: number;

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

  ngOnInit(): void {
    this.productosModal = this.carritoService.getProductosCarrito();
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
      precio: this.precio,
      preciofinal: this.preciofinal,
      descuento: this.descuento,
      cantidad: 1,
    };

    this.carritoService.agregarProductoCarrito(producto);

    this.subtotal = 0;

    this.productosModal.forEach((prod) => {
      this.subtotal = this.subtotal + prod.preciofinal * prod.cantidad;
    });

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
