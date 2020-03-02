import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-showcase',
  templateUrl: './pipe-showcase.component.html',
  styleUrls: ['./pipe-showcase.component.css']
})
export class PipeShowcaseComponent  {

  nombre = "Pepín";
  titulo = "El maravilloso mundo de los peces";

  fecha1:Date = new Date();           // Ahora
  fecha2:Date = new Date(2020,11,23); // Año, mes - 1, día

  importe = 456.25;

  

}
