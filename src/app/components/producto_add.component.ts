import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { NgForm } from "@angular/forms/src/forms";
import { GLOBAL } from '../services/global';

@Component({
    selector: 'producto_add',
    templateUrl: '../views/producto_add.component.html',
    styleUrls: ['../styles/producto_add.component.css'],
    providers: [ProductoService]
})

export class ProductoAddComponent {
    public title: string;
    public producto: Producto;
    public filesToUpload;
    public resultUpload;

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
        //si hay imagen, guardamos el producto con la imagen
        if (this.filesToUpload && this.filesToUpload.length >= 1) {
            this._productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload)
                .then((result) => {
                    console.log(result);
                    this.resultUpload = result;
                    this.producto.imagen = this.resultUpload.filename;
                    this.saveProduct();
                }, (error) => {
                    console.log(error);
                });
            //si no hay imagen creamos el producto sin la imagen
        } else {
            this.saveProduct();
        }

        //f.resetForm();
    }

    saveProduct() {
        this._productoService.addProducto(this.producto).subscribe(
            response => {
                if (response.code == 200) {
                    this._router.navigate(['/productos_list']);
                } else {
                    console.log(response);
                }
            },
            error => {
                console.log(<any>error);
            }
        );

    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);

    }


}