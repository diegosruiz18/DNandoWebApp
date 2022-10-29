import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.signOut().then(()=>{
      this.router.navigate(['home'])
    })
  }

}
