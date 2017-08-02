import { Component } from '@angular/core';

@Component({
    selector:'home',
    templateUrl: '../views/home.component.html',
    styleUrls : ['../styles/home.component.css']
})

export class HomeComponent{
    public title:string;

    constructor(){
        this.title="WebApp de productos con Angular4";
    }

    ngOnInit(){
        console.log("Se ha cargado el componente home.component.ts");
    }


}