import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component({
    selector: 'producto_edit',
    templateUrl: '../views/producto_edit.component.html',
    styleUrls: ['../styles/producto_edit.component.css'],
    providers: [ProductoService]
})

export class ProductoEditComponent {
    public title: string;
    public producto: Producto;
    public id: number;
    public filesToUpload;
    public resultUpload;


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.title = "Edit product";
        this.producto = new Producto(0, "", "", null, "");
        this.id = 0;
    }

    ngOnInit() {
        console.log("Se ha cargado el componente producto_edit");
        this.producto = this._productoService.producto;
        this.getProducto();
        console.log("PRODUUUCTO" + this.producto);
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

    onSubmit() {
        //si hay imagen, guardamos el producto con la imagen
        if (this.filesToUpload && this.filesToUpload.length >= 1) {
            this._productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload)
                .then((result) => {
                    console.log(result);
                    this.resultUpload = result;
                    this.producto.imagen = this.resultUpload.filename;
                    this.updateProduct();
                }, (error) => {
                    console.log(error);
                });
            //si no hay imagen creamos el producto sin la imagen
        } else {
            this.updateProduct();
        }

        //f.resetForm();
    }

    updateProduct() {
        this._productoService.editProducto(this.id,this.producto).subscribe(
            response => {
                if (response.code == 200) {
                    this._router.navigate(['/producto',this.id]);
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