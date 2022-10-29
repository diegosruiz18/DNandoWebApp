import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-producto',
  templateUrl: './info-producto.component.html',
  styleUrls: ['./info-producto.component.css']
})
export class InfoProductoComponent implements OnInit {

  @Input() acercaDe!:string;
  @Input() marca!:string;
  @Input() contenido!:string;
  @Input() categoria!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
