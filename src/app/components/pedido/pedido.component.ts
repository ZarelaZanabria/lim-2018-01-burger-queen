import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Producto } from '../../model/producto';
import { PedidoService } from '../../services/pedido.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  //CARRITO
  private carrito: Array<Producto> = [];
  private subscription: Subscription;
  private total: number;

  productos$: Observable<Producto[]>;
  categoriaFilter$: BehaviorSubject<string | null>;

  constructor(afs: AngularFirestore, private pedidoService: PedidoService) {
    this.categoriaFilter$ = new BehaviorSubject(null);

    this.productos$ = combineLatest(
      this.categoriaFilter$
    ).pipe(switchMap(([categoria]) =>
      afs.collection<Producto>('productos', ref => {
        let query: firebase.firestore.Query = ref;
        if (categoria) { query = query.where('categoria', '==', categoria) };
        return query;
      }).valueChanges()
    ));
  }

  ngOnInit() {
    this.pedidoService.getCarrito().subscribe(data => {
      console.log(data);
      this.carrito = data;
      this.total = this.pedidoService.getTotal();
    },
      error => alert(error));
  }
  //Función para filtrar
  filterByCategoria(categoria: string | null) {
    this.categoriaFilter$.next(categoria);
  }

  addProducto(producto) {
    this.pedidoService.addCarrito(producto);
  }


}
