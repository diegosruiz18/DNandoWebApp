import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonio',
  templateUrl: './testimonio.component.html',
  styleUrls: ['./testimonio.component.css']
})
export class TestimonioComponent implements OnInit {

  @Input() cargo!:string;
  @Input() nombrePersona!:string;
  @Input() descripcion!:string;
  @Input() photoURL!:string;

  constructor() { }

  ngOnInit(): void {
  }

}