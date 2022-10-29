import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { CarritoService } from 'src/app/services/carrito.service';

//para el modal
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css'],
  //para el modal
  providers: [NgbModalConfig, NgbModal],
})
export class TablaProductosComponent implements OnInit {
  //para filtrar los productos de la tabla
  @Input() categoria!: string;

  //para el modal
  @Input() idProducto!: string;
  @Input() nombreProducto!: string;
  @Input() precio!: number;
  @Input() preciofinal!: number;
  @Input() photoURL!: string;
  @Input() descuento!: number;
  @Input() marca!: string;

  productos: any[]= [];

  constructor(
    private productoService: ProductosService,
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
    this.productoService.getProductosCategoria(this.categoria).subscribe((querysnapshot)=>{
      this.productos = [];
      querysnapshot.forEach((doc)=>{
        this.productos.push(doc);
      })
    })

    this.productosModal = this.carritoService.getProductosCarrito();
  }

  enrutarDetalleProducto(id_producto:any){
    this.router.navigate(['producto',id_producto]);
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

  anhadirProcutoCarrito(productoAgregar:any) {
    var producto = {
      nombre: productoAgregar.payload.doc.data().nombre,
      photoURL: productoAgregar.payload.doc.data().photoURL,
      idProducto: productoAgregar.payload.doc.id,
      precio: productoAgregar.payload.doc.data().precio,
      preciofinal: productoAgregar.payload.doc.data().preciofinal,
      descuento: productoAgregar.payload.doc.data().descuento,
      cantidad: 1,
    };

    this.carritoService.agregarProductoCarrito(producto);

    this.subtotal = 0;

    this.productosModal.forEach((prod) => {
      this.subtotal = this.subtotal + prod.preciofinal * prod.cantidad;
    });
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
  }

  seguirComprando():void{
    this.modalService.dismissAll();
    this.router.navigate(['productos']);
  }

}
