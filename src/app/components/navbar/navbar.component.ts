import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FootercontrollerService } from 'src/app/services/footercontroller.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private controladorFooter: FootercontrollerService
  ) { }

  ngOnInit(): void {
  }

  clickIngresar(){
    this.router.navigate(['login']);
  }

  //Implementar funcion logout

  enrutar(ruta:string){
    if(ruta=='admin'){
      this.router.navigate(['admin']);
      this.controladorFooter.esconderFooter();
    }else if(ruta=='pedidos'){
      this.router.navigate(['pedidos']);
    }
    this.router.navigate([ruta]);
  }

  /*
  clickHome(){
    this.router.navigate(['home']);
  }
  
  enrutarNosotros(){
    this.router.navigate(['nosotros']);
  }

  enrutarGaleria(){
    this.router.navigate(['productos']);
  }
  */
}
