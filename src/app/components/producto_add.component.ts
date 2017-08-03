import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector:'producto_add',
    templateUrl:'../views/producto_add.component.html',
    styleUrls : ['../styles/producto_add.component.css'],
    providers: [ProductoService]
})

export class ProductoAddComponent{
    public title:string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.title="Crear un nuevo producto";
    }

    ngOnInit(){
        console.log("Se ha cargado el componente producto_add.ts");
    }





}