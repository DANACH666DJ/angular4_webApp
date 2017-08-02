import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'productos_list',
    templateUrl: '../views/productos_list.component.html',
    styleUrls: ['../styles/productos_list.component.css']
})

export class ProductosListComponent {
    public title: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.title = "Listado de productos";
    }

    ngOnInit() {
        console.log("Se ha cargado el componente  productos_list.component.ts");
    }
}
