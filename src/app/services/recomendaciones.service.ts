import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionesService {

  constructor(private af:AngularFirestore) { }


  getRecomendaciones(){
    //Retorna la colección de recomendaciones
    //El snapshot sirve para ejecutar el subscribe y reciba data en realtime
    return this.af.collection('recomendaciones').snapshotChanges();
  }

  getRecomendacionEspecifica(idRecomendacion:string){
    return this.af.collection('recomendaciones').doc(idRecomendacion).valueChanges();
  }

}