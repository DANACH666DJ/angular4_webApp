import { Component } from '@angular/core';

@Component({
    selector:'error',
    templateUrl: '../views/error.component.html',
    styleUrls : ['../styles/error.component.css']
})

export class ErrorComponent{
    public title:string;

    constructor(){
        this.title="La ruta especificada no existe";
    }

    ngOnInit(){
        console.log("Se ha cargado el componente error.component.ts");
    }


}