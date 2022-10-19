import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input() photoURL!:string;
  @Input() nombreProducto!:string;
  @Input() descripcion!:string;
  @Input() idProducto!:any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick(){
    //implementar navegacion a detalle de producto -> producto:id
    this.router.navigate(['detalle']);
  }

}
