import { Component, OnInit } from '@angular/core';
import { TestimoniosService } from 'src/app/services/testimonios.service';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent implements OnInit {

  testimonios:any[]=[];

  constructor(
    private testimoniosService: TestimoniosService
  ) { }

  ngOnInit(): void {
    this.testimoniosService.getTestimonios().subscribe((querysnapshot)=>{
      this.testimonios = [];
      querysnapshot.forEach((doc)=>{
        this.testimonios.push(doc);
      })
    });
  }
}