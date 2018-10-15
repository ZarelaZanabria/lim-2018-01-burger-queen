import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { categoria: string; }


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor() { }
}
