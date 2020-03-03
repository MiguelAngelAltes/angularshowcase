import { Component } from '@angular/core';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component {

  nombres:string[] = ["Pepín","Honorio","Anna","Carlota"];
  nuevoNombre:string = undefined;

  insert():void{
    this.nombres.push(this.nuevoNombre);
    this.nuevoNombre = undefined;
  }

}
