import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';


@Component({
    selector: 'productos_list',
    templateUrl: '../views/productos_list.component.html',
    styleUrls: ['../styles/productos_list.component.css'],
    providers: [ProductoService]
})

export class ProductosListComponent {
    public title: string;
    public productos: Array<Producto>;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.title = "Product List";
        this.productos = [];
    }

    ngOnInit() {
        console.log("Se ha cargado el componente  productos_list.component.ts");
        this._productoService.getProductos().subscribe(
            result => {
                if (result.code != 200) {
                    console.log(result);
                } else {
                    this.productos = result.data;
                    console.log(this.productos);
                }
            },
            error => {
                let errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }









}
