import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'producto_detal',
    templateUrl: '../views/producto_detail.html',
    styleUrls: ['../styles/producto_detail.css'],
    providers: [ProductoService]
})

export class ProductoDetailComponent {
    public title: string;
    public id: number;
    public producto: Producto;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.title = "Product details";
        this.id = 0;
        this.producto = new Producto(0, "", "", 0, "");
    }

    ngOnInit() {
        console.log("El componente producto_detail ha sido cargado");
        this.getProducto();
    }

    getProducto() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this.id = id;
        });
        this._productoService.getProducto(this.id).subscribe(
            result => {
                if (result.code != 200) {
                    this._router.navigate(['/productos_list']);
                } else {
                    this.producto = result.data;
                    console.log(this.producto);
                }
            },
            error => {
                let errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }






}