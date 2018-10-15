import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

//Importamos el archivo de router para poder realizar las rutas
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ListDesayunoComponent } from './components/list-desayuno/list-desayuno.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { environment } from '../environments/environment';

//Inportancio  para Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Lamamos al servicio  
import { ConexionService } from '../app/services/conexion.service';
import { ProductoAddComponent } from './components/Producto/producto-add/producto-add.component';
import { ProductoListComponent } from './components/Producto/producto-list/producto-list.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PedidoComponent } from './components/pedido/pedido.component';

//Realizar las rutas

const routes: Routes = [
    //Ponemos la ruta platos cuando llamamos al componete 
     { path: 'desayunos', component: ListDesayunoComponent },
    { path: 'productos', component: ProductoComponent },
    { path: 'pedido', component: PedidoComponent },
    //Cuando no tiene ninguna  ruta que tiene que mostrar
    { path: '', component: InicioComponent, pathMatch: 'full' },
    //Cuando asignamos cualquier ruta tiene que mostrar 
    { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
]


@NgModule({
    declarations: [
        AppComponent,
        NavegacionComponent,
        ListDesayunoComponent,
        InicioComponent,
        ProductoAddComponent,
        ProductoListComponent,
        ProductoComponent,
        PedidoComponent,

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
    providers: [ConexionService,
        { provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule { }
