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
    public confirmado: number;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.title = "Product List";
        this.productos = [];
        this.confirmado = null;
    }

    ngOnInit() {
        console.log("Se ha cargado el componente  productos_list.component.ts");
        this.getProductos();
    }

    getProductos() {
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
                    this.getProductos();
                    alert("The product " + this.productos[index].nombre + " has been successfully erased");
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
