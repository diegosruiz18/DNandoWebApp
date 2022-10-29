import { Component, OnInit } from '@angular/core';
import { RecomendacionesService } from 'src/app/services/recomendaciones.service';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  recomendaciones:any[]=[];

  constructor(private recomendacionesService: RecomendacionesService) { }

  ngOnInit(): void {
    this.recomendacionesService.getRecomendaciones().subscribe((querysnapshot)=>{
      this.recomendaciones = [];
      querysnapshot.forEach((doc)=>{
        this.recomendaciones.push(doc);
      })
    });
  }

}