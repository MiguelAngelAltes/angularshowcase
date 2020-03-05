import { Component, OnInit } from '@angular/core';
import { Cliente1Service } from 'src/app/services/cliente1.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises:any[] = undefined;
  pais:any = undefined;
  nombre:string = undefined;

  constructor(private cliente1Service: Cliente1Service) { }

  buscar():void{
    this.cliente1Service.getPais(this.nombre).subscribe(x => {
      console.log(x);
      this.pais = x;
    });
  }

  ngOnInit(): void {
    this.cliente1Service.getAll().subscribe(x => {
      console.log(x);
      this.paises = x;
    });
  }

}