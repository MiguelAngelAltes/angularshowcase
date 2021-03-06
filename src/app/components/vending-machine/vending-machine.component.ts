import { Component }  from '@angular/core';
import { Producto }   from 'src/app/model/producto';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css']
})
export class VendingMachineComponent {

  code:number = undefined;

  machine = [
  {
    code:22,
    producto:new Producto("Palitos Bimbo Aceite Oliva",1.5,10323),
    stock:10
  },
  {
    code:23,
    producto:new Producto("Patatas Fritas Matutano 100gr",2.0,10388),
    stock:10
  },
  {
    code:25,
    producto:new Producto("Almendras Saladas El Nomo",1.7,10388),
    stock:10
  },
  {
    code:27,
    producto:new Producto("Cacahuetes Salados Les Borges",1.2,10399),
    stock:10
  },
  {
    code:29,
    producto:new Producto("Ositos de Goma Baldi",1.2,10922),
    stock:10
  },
  {
    code:31,
    producto:new Producto("CocaCola Zero 33cl",1.5,10455),
    stock:10
  },
  {
    code:32,
    producto:new Producto("CocaCola Zero 33cl",1.5,10455),
    stock:10
  },
  {
    code:34,
    producto:new Producto("Agua Fontvella 33cl",1.2,10300),
    stock:10
  },
  {
    code:36,
    producto:new Producto("Agua Fontvella 33cl",1.2,10300),
    stock:10
  }
];

comprar():void{

  let linea = this.machine.find(x => x.code == this.code);

  if(linea){

    if (linea.stock === 0){
      // ya veremos qué hacer...
      console.log("no hay stock");
    } else {
      linea.stock--;
    }

  } else {
    console.log("codigo no existente");
  }

  this.code = undefined;

}



}
