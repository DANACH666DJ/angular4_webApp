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
    public confirmado: number;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.title = "Product details";
        this.id = 0;
        this.producto = new Producto(0, "", "", 0, "");
        this.confirmado = null;
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

    borrarConfirm(id: number) {
        this.confirmado = id;
    }

    cancelarConfirm() {
        this.confirmado = null;
    }


    deleteProducto(id: number, index: number) {
        this._productoService.deleteProducto(id).subscribe(
            response => {
                if (response.code == 200) {
                    alert("The product " + this.producto.nombre + " has been successfully erased");
                    this._router.navigate(['/productos_list']);
                } else {
                    alert("Error deleting product");
                }
            },
            error => {
                console.log(<any>error);
            }
        );

    }






}