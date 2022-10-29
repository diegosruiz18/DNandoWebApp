import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { SpinnerServiceService } from 'src/app/services/spinner-service.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  @Input() action!: string;

  email = '';
  pass = '';
  nombres = '';
  //ciudad = '';
  //edad = '';
  ingresar: Boolean = true;
  contrasenhaErronea: boolean = false;
  constructor(
    private router: Router,
    public auth: AngularFireAuth,
    public spinnerService: SpinnerServiceService
  ) { }

  ngOnInit(): void {
    if (this.action != 'login') {
      this.ingresar = !this.ingresar;
    }
  }

  loginWithGoogle() {
    this.spinnerService.mostrarSpinner();
    try {
      this.auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(() => {
          this.router.navigate(['home']);
          this.spinnerService.ocultarSpinner();
        })
        .catch(err=>{
          this.spinnerService.ocultarSpinner();
        });
    } catch {
      this.spinnerService.ocultarSpinner();
    }
    console.log("Logueado con google");
  }

  customLogin() {
    this.spinnerService.mostrarSpinner();
    try {
      this.auth
        .signInWithEmailAndPassword(this.email, this.pass)
        .then(() => {
          this.router.navigate(['home']);
          this.contrasenhaErronea = false;
          this.spinnerService.ocultarSpinner();
        })
        .catch((err) => {
          console.log('Error cl: ', err);
          this.spinnerService.ocultarSpinner();
          this.contrasenhaErronea = true;
        });
    } catch {
      this.spinnerService.ocultarSpinner();
    }
    console.log("Custom login");
  }

  customRegistro() {
    this.spinnerService.mostrarSpinner();
    try {
      this.auth
        .createUserWithEmailAndPassword(this.email, this.pass)
        .then(() => {
          this.auth
            .signInWithEmailAndPassword(this.email, this.pass)
            .then(() => {
              this.auth.currentUser.then((user) =>
                user?.updateProfile({
                  displayName: this.nombres,
                  photoURL:
                    'https://avatars.githubusercontent.com/u/57932682?s=400&v=4',
                })
              );
              this.router.navigate(['home']);
              this.spinnerService.ocultarSpinner();
            })
            .catch((err) => {
              console.log('Error cl: ', err);
              this.spinnerService.ocultarSpinner();
            });
        })
        .catch((err) => {
          console.log('Error user: ', err);
          this.spinnerService.ocultarSpinner();
        });
    } catch {
      this.spinnerService.ocultarSpinner();
    }
    console.log("Custom registro");
  }

  clicRegistrate() {
    this.router.navigate(['register']);
  }

  clicIniciaSesion() {
    this.router.navigate(['login']);
  }

  onSubmit() {
    // this.router.navigate(['admin'])
  }

}