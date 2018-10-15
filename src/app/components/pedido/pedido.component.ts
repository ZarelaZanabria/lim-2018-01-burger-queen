import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';


export interface Producto {
  categoria: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  productos$: Observable<Producto[]>;
  categoriaFilter$: BehaviorSubject<string | null>;

  constructor(afs: AngularFirestore) {
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
  
  //Función para filtrar
  filterByCategoria(categoria : string|null ){
    this.categoriaFilter$.next(categoria);
  }

  ngOnInit() {
  }

}
