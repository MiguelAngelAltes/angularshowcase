import { Component, OnInit }  from '@angular/core';
import { Producto }           from 'src/app/model/producto';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {

  productos:Producto[] = [];

  ngOnInit(): void {

    this.productos.push(new Producto("Frutos Secos Buenola",1.0,22));
    this.productos.push(new Producto("Agua Lanjarón 33cl",1.2,24));
    this.productos.push(new Producto("KitKat",1.5,25));
    this.productos.push(new Producto("Monster",2.7,31));
    this.productos.push(new Producto("Gominolas Aibó",1.0,20));

  }

}
