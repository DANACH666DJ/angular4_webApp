import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'producto_edit',
    templateUrl: '../views/producto_edit.component.html',
    styleUrls: ['../styles/producto_edit.component.css'],
    providers: [ProductoService]
})

export class ProductoEditComponent{
    public title:string;
    public producto:Producto;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.title = "Edit product";
        this.producto = new Producto(0,"","",0,"");
    }

    ngOnInit(){
        console.log("Se ha cargado el componente producto_edit");
        
    }




}