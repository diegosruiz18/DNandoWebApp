import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    //Implementar funcionalidad para modal
  }

  enrutarDetalleProducto(){
    //Implementar ruta hacia detalle de producto -> producto:id
    this.router.navigate(['detalle'])
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

  operacionUnidadProductoCarrito() {
    //Implementar funcionalidad
    console.log("Suma o resta de cantidad de producto");
  }

  seguirComprando():void{
    this.modalService.dismissAll();
    this.router.navigate(['productos']);
  }

}
