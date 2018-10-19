import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  
  productos: Observable<any[]>;
  constructor(db: AngularFirestore) {
    //Esta varinale utiliza 
    this.productos = db.collection('productos').valueChanges();
  }

  ngOnInit() {
  }


}
