import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {

  constructor(private af:AngularFirestore) { }


  getTestimonios(){
    //Retorna la colección de noticias especificada
    //El snapshot sirve para ejecutar el subscribe y reciba data en realtime
    return this.af.collection('testimonios').snapshotChanges();
  }

  getTestimonioEspecifico(idTestimonio:string){
    return this.af.collection('testimonios').doc(idTestimonio).valueChanges();
  }

}