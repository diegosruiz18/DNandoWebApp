import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private af:AngularFirestore) { }


  getNoticias(){
    //Retorna la colección de noticias especificada
    //El snapshot sirve para ejecutar el subscribe y reciba data en realtime
    return this.af.collection('noticias').snapshotChanges();
  }

  getNoticiaEspecifica(idNoticia:string){
    return this.af.collection('productos').doc(idNoticia).valueChanges();
  }

}