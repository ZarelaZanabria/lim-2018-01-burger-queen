import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Observable<any[]>;
  constructor(db: AngularFirestore) {
    //Esta varinale utiliza 
    this.productos = db.collection('productos').valueChanges();
  }

  ngOnInit() {
  }


}
