import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
;


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  /* itemsCarrito: AngularFirestoreCollection<any> */
  
  private subject: BehaviorSubject<Producto[]> = new BehaviorSubject([]);
  
  //Es un array de  Objectos de productos
 public itemsCarrito: Producto[] = [];


  constructor(private firestore: AngularFirestore) {

    this.subject.subscribe(data => this.itemsCarrito = data);   
  
  }

  addCarrito(carrito: Producto) {

   this.subject.next([...this.itemsCarrito, carrito]); 
   
  }

  getCarrito(): Observable<Producto[]> {
    return this.subject;
  }

 
  getTotal() {
    return this.itemsCarrito.reduce((total, producto: Producto) => { return total + producto.precio; }, 0);
  }

 



}
