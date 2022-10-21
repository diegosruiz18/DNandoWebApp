import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FootercontrollerService } from 'src/app/services/footercontroller.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(
    private footerControllerService: FootercontrollerService,
    //private auth: AngularFireAuth,
    private router: Router
  ) {
    
  }

  opcion:string='pedidos'

  ngOnInit(): void {
    //Implementar
    /**
    this.auth.authState.subscribe((el)=>{
      if(!el){
        alert("Debe Registrarse Primero")
        this.router.navigate(['login'])
      }
    })
    */
    this.footerControllerService.esconderFooter();
  }

  ngOnDestroy(): void{
    this.footerControllerService.mostrarFooter();
  }

  cambiarOpcionModulo(opcion:string){
    this.opcion = opcion;
  }

}
