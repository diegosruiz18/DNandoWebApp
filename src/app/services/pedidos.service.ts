import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private af:AngularFirestore) { }

  getPedidos(){
    //Retorna la colección de pedidos
    //El snapshot sirve para ejecutar el subscribe y reciba data en realtime
    return this.af.collection('pedidos').snapshotChanges();
  }

  getPedidoEspecifico(idPedido:string){
    return this.af.collection('pedidos').doc(idPedido).valueChanges();
  }

  public agregarPedido(data: {nombrePersona: string, 
        correoPersona: string,
        telefono: string,
        direccion: string,
        carritoPedido: any[],
        costoEnvio: number,
        subtotal: number,
        total: number,
        estado: string
       }) {
    return this.af.collection('pedidos').add(data);
  }

  modificarPedidoEspecifico(idPedido:string,nuevoEstado:string){
    this.af.collection('pedidos').doc(idPedido).update({
      estado: nuevoEstado
    })
  }

  crearIndice(){
    return this.af.createId();
  }

}