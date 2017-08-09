import { Component } from '@angular/core';

@Component({
    selector:'error',
    templateUrl: '../views/error.component.html',
    styleUrls : ['../styles/error.component.css']
})

export class ErrorComponent{
    public title:string;

    constructor(){
        this.title="The selected page does not exist";
    }

    ngOnInit(){
        console.log("Se ha cargado el componente error.component.ts");
    }


}