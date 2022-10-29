import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})
export class ProductosAdminComponent implements OnInit {

  constructor(
    private productosService:ProductosService
  ) { }

  
  
  productoForm = new FormGroup({
    nombre: new FormControl(''),
    categoria: new FormControl(''),
    marca: new FormControl(''),
    precio: new FormControl(''),
    preciofinal: new FormControl(''),
    descuento: new FormControl(''),
    stock: new FormControl(''),
    descripcion: new FormControl(''),
    contenido: new FormControl('')
  })
  
  idProductoTemporal!: string;
  productoTemporal!: any;
  imageEvent: any = '';
  pedidos: any[] = [];
  categoriaTemporal: string = 'Abarrotes';
  consultaModificar:boolean = false;

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((querysnapshot) => {
      this.pedidos = [];
      querysnapshot.forEach((doc) => {
        this.pedidos.push(doc);
      });
    });
  }

  setCategoriaTemporal(temp:string){
    console.log(temp)
    this.categoriaTemporal = temp;
  }

  setProductoTemporal(idPedidoTemporal:string){
     
    
    this.productoForm = new FormGroup({
      nombre: new FormControl(''),
      categoria: new FormControl(''),
      marca: new FormControl(''),
      precio: new FormControl(''),
      preciofinal: new FormControl(''),
      descuento: new FormControl(''),
      stock: new FormControl(''),
      descripcion: new FormControl(''),
      contenido: new FormControl('')
    })

    this.imageEvent = '';

    this.idProductoTemporal = idPedidoTemporal;
    this.productosService.getProductoEspecifico(idPedidoTemporal).subscribe((el)=>{
      this.productoTemporal=el
    })
  }

  onSubmit(){

    this.productoForm.value.categoria = this.categoriaTemporal;
    
    this.productosService.agregarProducto(this.productoForm.value,this.imageEvent)

  }

  onSubmitModify(){

    if(this.productoForm.value.nombre==''){
      this.productoForm.value.nombre = this.productoTemporal.nombre
    }
    if(this.productoForm.value.categoria==''){
      this.productoForm.value.categoria = this.productoTemporal.categoria
    }
    if(this.productoForm.value.marca==''){
      this.productoForm.value.marca = this.productoTemporal.marca
    }
    if(this.productoForm.value.precio==''){
      this.productoForm.value.precio = this.productoTemporal.precio
    }
    if(this.productoForm.value.preciofinal==''){
      this.productoForm.value.preciofinal = this.productoTemporal.preciofinal
    }
    if(this.productoForm.value.descuento==''){
      this.productoForm.value.descuento = this.productoTemporal.descuento
    }
    if(this.productoForm.value.stock==''){
      this.productoForm.value.stock = this.productoTemporal.stock
    }
    if(this.productoForm.value.descripcion==''){
      this.productoForm.value.descripcion = this.productoTemporal.acercaDe
    }
    if(this.productoForm.value.contenido==''){
      this.productoForm.value.contenido = this.productoTemporal.contenido
    }

    this.productosService.modificarProductoEspecifico(this.productoForm.value,this.imageEvent,this.idProductoTemporal)
    
  }

  changeProductImage(event: any){
    this.imageEvent = event
  }

  cambiarEstadoModificar(){
    this.consultaModificar =!this.consultaModificar 
  }

  eliminarProducto(idProductoEliminar:string){
    this.productosService.eliminarProduco(idProductoEliminar)
  }

}
