import { Component, Input, OnInit } from '@angular/core';

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
    private modalService: NgbModal,
    config: NgbModalConfig,
  ) {
    config.size = 'xl';
    config.scrollable = true;
  }
  //para el modal
  closeResult: string = '';
  productosModal: any[] = [];
  subtotal: number = 0;

  ngOnInit(): void {
    //Implementar funcionalidad
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
    //this.router.navigate(['flujo-detalles']);
  }

  operacionUnidadProductoCarrito() {
    //Implementar funcionalidad
    console.log("Suma o resta de cantidad de producto");
  }

  seguirComprando():void{
    this.modalService.dismissAll();
    //this.router.navigate(['productos']);
  }

}
