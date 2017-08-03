import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { NgForm } from "@angular/forms/src/forms";

@Component({
    selector: 'producto_add',
    templateUrl: '../views/producto_add.component.html',
    styleUrls: ['../styles/producto_add.component.css'],
    providers: [ProductoService]
})

export class ProductoAddComponent {
    public title: string;
    public producto: Producto;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.title = "Crear un nuevo producto";
        this.producto = new Producto(0, "", "", 0, "");
    }

    ngOnInit() {
        console.log("Se ha cargado el componente producto_add.ts");
        console.log(this.producto);
    }

    onSubmit(f: NgForm) {
        this._productoService.addProducto(this.producto).subscribe(
            response => {
                if(response.code == 200){
                    this._router.navigate(['/home']);
                } else {
                    console.log(response);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
        f.resetForm();
    }


}