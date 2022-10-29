import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];

  constructor(
    private noticiasService: NoticiasService
  ) { }

  ngOnInit(): void {
    this.noticiasService.getNoticias().subscribe((querysnapshot) => {
      this.noticias = [];
      querysnapshot.forEach((doc) => {
        this.noticias.push(doc);
      })
    });
  }
}