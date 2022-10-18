import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendacion',
  templateUrl: './recomendacion.component.html',
  styleUrls: ['./recomendacion.component.css']
})
export class RecomendacionComponent implements OnInit {

  @Input() photoURL!:string;
  @Input() nombreProducto!:string;
  @Input() descripcion!:string;
  @Input() idProducto!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
