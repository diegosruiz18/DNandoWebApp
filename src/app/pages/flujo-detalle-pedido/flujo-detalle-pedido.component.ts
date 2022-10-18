import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flujo-detalle-pedido',
  templateUrl: './flujo-detalle-pedido.component.html',
  styleUrls: ['./flujo-detalle-pedido.component.css']
})
export class FlujoDetallePedidoComponent implements OnInit {

  //FALTA IMPLEMENTAR TEMPLATE DE ERROR, MODIFICAR app.module.ts

  //para modales
  modalsNumber:number = 0;

  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder

  ) { }

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


    //validacion de formulario
    this.formLogin = this.formBuilder.group({
      email: ['', [
          Validators.required,
          Validators.email
        ]
      ],
      type: [ '', [
          Validators.required
        ]
      ],
      nombre: ['', [
          Validators.required
        ]
      ],
      telefono: ['', [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      direccion: ['', [
          Validators.required
        ]
      ],
      pais: ['', [
          Validators.required
        ]
      ],
      provincia: ['', [
          Validators.required
        ]
      ],
      ciudad: ['', [
          Validators.required
        ]
      ],
      codigopostal: ['', [
          Validators.required
        ]
      ]
    });
  }



  //para los modales

  closeResult: string = '';

  open() {
    //implementar funcionalidad de modal
    console.log("Se envió el pedido");
  }

}
