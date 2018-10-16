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



  /**
   * addCarrito
   * @param producto
   */
  addCarrito(carrito: Producto) {
   this.subject.next([...this.itemsCarrito, carrito]); 
    console.log(this.itemsCarrito)  
   console.log() 

   return this.firestore.collection('pedido').add(carrito)
    
  }

  /**
   * clearCarrito
   */
  clearCarrito() {
    this.subject.next(null);
  }

  /**
   * getCarrito
   */
  getCarrito(): Observable<Producto[]> {
    return this.subject;
  }

  /**
   * getTotal
   */
  getTotal() {
    return this.itemsCarrito.reduce((total, producto: Producto) => { return total + producto.precio; }, 0);
  }

  deletePedido($key: string) {
    /*   this.itemsCarrito.remove($key); */

  }



}
