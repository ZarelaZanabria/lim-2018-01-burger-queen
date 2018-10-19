import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private subject: BehaviorSubject<Producto[]> = new BehaviorSubject([]);

  //Es un array de  Objectos de productos
  public itemsCarrito: Producto[] = [];
  navbarCartCount = 0;
  db: any;

  constructor(private firestore: AngularFirestore) {
    this.subject.subscribe(data => this.itemsCarrito = data);
  }

  save(data) {
       return this.firestore.collection('pedido').add(data);
  }

  addCarrito(carrito: Producto) {

    this.subject.next([...this.itemsCarrito, carrito]);
  }

  agregarCarrito() {
    return this.firestore.collection('pedido').add(this.itemsCarrito)
  }

 
  clearCarrito() {
    this.subject.next(null);
  }


  getCarrito(): Observable<Producto[]> {
    return this.subject;
  }

   getTotal() {
    return this.itemsCarrito.reduce((total, producto: Producto) => { return total + producto.precio; }, 0);
  }

  deletePedido(item) {
    var index = this.itemsCarrito.indexOf(item);
    this.itemsCarrito.splice(index, 1);
  }

}