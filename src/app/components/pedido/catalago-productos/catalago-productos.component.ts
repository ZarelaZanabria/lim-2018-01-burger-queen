import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { PedidoService } from '../../../services/pedido.service';
import { switchMap } from 'rxjs/operators';
import { Producto } from '../../../model/producto';

@Component({
  selector: 'app-catalago-productos',
  templateUrl: './catalago-productos.component.html',
  styleUrls: ['./catalago-productos.component.css']
})
export class CatalagoProductosComponent implements OnInit {
  productos$: Observable<Producto[]>;
  categoriaFilter$: BehaviorSubject<string | null>;

  constructor(afs: AngularFirestore,private pedidoService: PedidoService ) {
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
  }

    //Función para filtrar
    filterByCategoria(categoria: string | null) {
      this.categoriaFilter$.next(categoria);
    }

    
  addProducto(producto) {
    this.pedidoService.addCarrito(producto);
  }

}
