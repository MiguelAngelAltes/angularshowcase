import { Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{

  display:number = 0;
  memoria:number = 0;
  nuevoOperando:boolean = false;
  
  boton(cifra:number): void {

    if (this.nuevoOperando){
      this.display = 0;
      this.nuevoOperando = false;
    }

    this.display = this.display * 10 + cifra;
  }

  botonC():void {
    this.memoria = 0;
    this.display = 0;
  }

  botonSuma():void {
    this.nuevoOperando = true;
    this.memoria += this.display;
    this.display = this.memoria;
  }

  botonResta():void {
    this.nuevoOperando = true;
    this.memoria -= this.display;
    this.display = this.memoria;
  }

}
