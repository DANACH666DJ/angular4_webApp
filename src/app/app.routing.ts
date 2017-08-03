import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos_list.component';
import { ProductoAddComponent } from './components/producto_add.component';

//Array de ruyas con los componentes
const appRoutes: Routes = [
    //ruta con la que inicia la app
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'productos_list', component:  ProductosListComponent },
    { path: 'productos_add', component:  ProductoAddComponent },
    //ruta por si falla y no existe la ruta
    { path: '**', component: ErrorComponent }
];

//array  vacio que necesita angular para cargar provider de ruta
export const appRoutingProviders: any[] = [];

//
export const routing: ModuleWithProviders
    = RouterModule.forRoot(appRoutes);
