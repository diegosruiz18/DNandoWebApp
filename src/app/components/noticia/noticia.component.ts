import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
