import { Component, OnInit } from '@angular/core';
import { ConversorTemperaturaService } from 'src/app/services/conversor-temperatura.service';

@Component({
  selector: 'app-temperatura-converter',
  templateUrl: './temperatura-converter.component.html',
  styleUrls: ['./temperatura-converter.component.css']
})
export class TemperaturaConverterComponent {

  constructor(private conversor: ConversorTemperaturaService) {}

  temperatura1:number = 0;
  temperatura2:number = 0;

  medida1:string = "celsius";
  medida2:string = "celsius";

  recalcular():void {
    this.temperatura2 = this.conversor.convertir(this.temperatura1,this.medida1,this.medida2);
  }

}
