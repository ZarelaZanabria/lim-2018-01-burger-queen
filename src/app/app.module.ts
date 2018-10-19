import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importamos el archivo de router para poder realizar las rutas
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { environment } from '../environments/environment';

//Inportancio  para Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Lamamos al servicio  
import { PedidoComponent } from './components/pedido/pedido.component';
import { CatalagoProductosComponent } from './components/pedido/catalago-productos/catalago-productos.component';
import { VentaProductosComponent } from './components/pedido/venta-productos/venta-productos.component';
import { from } from 'rxjs';
import { ConexionService } from './services/conexion.service';

//Realizar las rutas

const routes: Routes = [
  { path: 'pedido', component: PedidoComponent },
  //Cuando no tiene ninguna  ruta que tiene que mostrar
  { path: 'inicio', component: InicioComponent },
  //Cuando asignamos cualquier ruta tiene que mostrar 
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
]


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InicioComponent,
    PedidoComponent,
    CatalagoProductosComponent,
    VentaProductosComponent
  ],
  imports: [
    BrowserModule,
    //Importamos las rutas
    RouterModule.forRoot(routes),
    //Hacemos la conexion po Firebase que esta en el archivo enviroment
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features

  ],

  bootstrap: [AppComponent],
  exports: [RouterModule],
  //Agregamos el servicio dentro providers
  providers: [ConexionService]
})
export class AppModule { }


