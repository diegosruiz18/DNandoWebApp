import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  enrutar(ruta:string){
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
