import { Component, OnInit } from '@angular/core';
import { FootercontrollerService } from 'src/app/services/footercontroller.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public FooteControlador: FootercontrollerService) { }

  flag: boolean = this.FooteControlador.controller;

  ngOnInit(): void {
  }

}
