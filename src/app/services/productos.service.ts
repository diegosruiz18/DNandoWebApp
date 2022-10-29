import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  downloadURL!: any;

  constructor(
    private af: AngularFirestore,
    private storageService: AngularFireStorage
  ) { }

  uploadImage(event: any) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.storageService.ref(filePath);
    const task = this.storageService.upload(filePath, file);

    task.then((el) => {
      console.log(el.metadata);
      fileRef
        .getDownloadURL()
        .toPromise()
        .then((url) => {
          return url;
        });
    });
  }

  getProductos() {
    //Retorna la colección de productos especificada
    //El snapshot sirve para ejecutar el subscribe y reciba data en realtime
    return this.af.collection('productos').snapshotChanges();
  }

  getProductoEspecifico(idProducto: string) {
    console.log('Id del Producto Específico: ', idProducto);
    return this.af.collection('productos').doc(idProducto).valueChanges();
  }

  getProductosCategoria(categoria: string) {
    return this.af
      .collection('productos', (ref) => ref.where('categoria', '==', categoria))
      .snapshotChanges();
  }

  modificarProductoEspecifico(data: any, event: any, idProducto: string) {

    if (!(event == '')) {

      console.log("Upgrade con Imagen")

      const file = event.target.files[0];
      const filePath = data.nombre + data.categori + data.marca;
      const fileRef = this.storageService.ref(filePath);
      const task = this.storageService.upload(filePath, file);

      task.then((el) => {
        console.log(el.metadata);
        fileRef
          .getDownloadURL()
          .toPromise()
          .then((url) => {
            console.log(data);
            this.af
              .collection('productos')
              .doc(idProducto)
              .update({
                categoria: data.categoria,
                acercaDe: data.descripcion,
                descuento: data.descuento,
                marca: data.marca,
                nombre: data.nombre,
                precio: data.precio,
                preciofinal: data.preciofinal,
                stock: data.stock,
                contenido: data.contenido,
                photoURL: url,
              })
              .then(() => {
                console.log('Producto Modificado Exitosamente');
              })
              .catch((error) => {
                console.log('Error Modificando Producto: ', error);
              });
          });
      });
    } else {
      this.af
        .collection('productos')
        .doc(idProducto)
        .update({
          categoria: data.categoria,
          acercaDe: data.descripcion,
          descuento: data.descuento,
          marca: data.marca,
          nombre: data.nombre,
          precio: data.precio,
          preciofinal: data.preciofinal,
          stock: data.stock,
          contenido: data.contenido,
        })
        .then(() => {
          console.log('Producto Modificado Exitosamente');
        })
        .catch((error) => {
          console.log('Error Modificando Producto: ', error);
        });
    }
  }

  agregarProducto(data: any, event: any) {
    const file = event.target.files[0];
    const filePath = data.nombre + data.categoria + data.marca;
    const fileRef = this.storageService.ref(filePath);
    const task = this.storageService.upload(filePath, file);

    task.then((el) => {
      console.log(el.metadata);
      fileRef
        .getDownloadURL()
        .toPromise()
        .then((url) => {
          console.log(data);
          this.af
            .collection('productos')
            .add({
              categoria: data.categoria,
              acercaDe: data.descripcion,
              descuento: data.descuento,
              marca: data.marca,
              nombre: data.nombre,
              precio: data.precio,
              preciofinal: data.preciofinal,
              stock: data.stock,
              contenido: data.contenido,
              photoURL: url,
            })
            .then((docRef) => {
              console.log('Producto Añadido con ID: ', docRef.id);
            })
            .catch((error) => {
              console.log('Error Añadiendo producto: ', error);
            });
        });
    });
  }

  eliminarProduco(idProducto: string) {
    this.af.collection('productos').doc(idProducto).delete().then(
      () => {
        console.log("Producto Eliminado T_T");
      }
    );
  }

}