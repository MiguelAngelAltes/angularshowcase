import { Component, OnInit } from '@angular/core';
import { Cliente2Service } from 'src/app/services/cliente2.service';
import { Cancion } from 'src/app/model/cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {

  canciones: Cancion[] = undefined;
  cancion: Cancion = undefined;
  newCancion : Cancion = new Cancion();

  constructor(private cliente2Service: Cliente2Service) { }

  getList():void{
    this.cliente2Service.getAll().subscribe(x => {
      console.log(x);
      this.canciones = x;
    });
  }

  ngOnInit(): void {
    this.getList();
  }

  crear():void{
    this.cliente2Service.create(this.newCancion).subscribe(x => {
      console.log(x);
      this.newCancion = new Cancion();
      this.getList();
    })
  }

}