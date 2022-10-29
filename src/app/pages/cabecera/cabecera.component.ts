import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(
    private router:Router,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  clickIngresar(){
    this.router.navigate(['login'])
  }

  clickHome(){
    this.router.navigate(['home'])
  }

  logout(){
    this.auth.signOut().then(()=>{
      this.router.navigate(['home'])
    })
    .catch(err=>console.log("error: ",err))
  }

}
