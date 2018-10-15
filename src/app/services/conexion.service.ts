import { Injectable } from '@angular/core';


export interface Item { categoria: string; }


@Injectable({
  providedIn: 'root'
})

export class ConexionService {

  constructor() { }
}
