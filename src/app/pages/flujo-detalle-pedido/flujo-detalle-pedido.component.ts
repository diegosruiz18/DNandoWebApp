import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flujo-detalle-pedido',
  templateUrl: './flujo-detalle-pedido.component.html',
  styleUrls: ['./flujo-detalle-pedido.component.css']
})
export class FlujoDetallePedidoComponent implements OnInit {

  //para modales
  modalsNumber:number = 0;

  public formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: NgbModal,
    config: NgbModalConfig,
  ) {
    config.size = 'md';
    config.scrollable = true;
    config.centered=true;
  }

  //para el carrito
  productosModal: any[] = [];
  subtotal: number = 0;
  costoEnvio: number = 20;
  total: number = 0;

  //para agregar a pedido en bd
  pedidos:any[]=[];
  public documentId:any;

  indice:any=null;

  ngOnInit(): void {
    //Implementar funcionalidad para el carrito

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
