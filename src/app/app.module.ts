import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

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
import { ConexionService } from '../app/services/conexion.service';
import { ProductoAddComponent} from '../app/components/producto/producto-add/producto-add.component';
import {ProductoListComponent} from '../app/components/producto/producto-list/producto-list.component'
import { ProductoComponent } from './components/producto/producto.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { CatalagoProductosComponent } from './components/pedido/catalago-productos/catalago-productos.component';
import { VentaProductosComponent } from './components/pedido/venta-productos/venta-productos.component';
import { from } from 'rxjs';

//Realizar las rutas

const routes: Routes = [
    { path: '/lim-2018-01-burger-queen/productos', component: ProductoComponent },
    { path: 'lim-2018-01-burger-queen/pedido', component: PedidoComponent },
    //Cuando no tiene ninguna  ruta que tiene que mostrar
    { path: 'lim-2018-01-burger-queen/inicio', component: InicioComponent },
    //Cuando asignamos cualquier ruta tiene que mostrar 
    { path: 'lim-2018-01-burger-queen/**', redirectTo: 'inicio', pathMatch: 'full' }, 
]


@NgModule({
    declarations: [
        AppComponent,
        NavegacionComponent,
        InicioComponent,
        ProductoAddComponent,
        ProductoListComponent,
        ProductoComponent,
        PedidoComponent,
        CatalagoProductosComponent,
        VentaProductosComponent,
    

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


