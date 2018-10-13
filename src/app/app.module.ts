import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

//Importamos el archivo de router para poder realizar las rutas
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

import { ListMenuComponent } from './components/list-menu/list-menu.component';
import { ListDesayunoComponent } from './components/list-desayuno/list-desayuno.component';
import { InicioComponent } from './components/inicio/inicio.component';


//Realizar las rutas

const routes: Routes = [
  //Ponemos la ruta platos cuando llamamos al componete 
    { path: 'platos', component: ListMenuComponent },
    { path: 'desayunos', component: ListDesayunoComponent },
    //Cuando no tiene ninguna ruta que tiene que mostrar
    { path: '', component: InicioComponent, pathMatch : 'full'},
    //Cuando asignamos cualquier ruta tiene que mostrar 
    { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
]


@NgModule({
    declarations: [
        AppComponent,
        NavegacionComponent,
        ListMenuComponent,
        ListDesayunoComponent,
        InicioComponent
    ],
    imports: [
        BrowserModule,
        //Importamos las rutas
        RouterModule.forRoot(routes),

    ],
    bootstrap: [AppComponent],
    exports: [RouterModule],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule { }
