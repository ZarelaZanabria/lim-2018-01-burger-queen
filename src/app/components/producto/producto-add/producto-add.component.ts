import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css']
})
export class ProductoAddComponent implements OnInit {
  productos: Observable<any[]>;
  constructor(db: AngularFirestore) {
    //Esta varinale utiliza 
    this.productos = db.collection('productos').valueChanges();
  }

  ngOnInit() {
  }
}

