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

  // fechas para cada mes... 
  // Para probar el pipe del trimestre

  fecha_0:Date = new Date(2020,0,10);
  fecha_1:Date = new Date(2020,1,10);
  fecha_2:Date = new Date(2020,2,10);
  fecha_3:Date = new Date(2020,3,10);
  fecha_4:Date = new Date(2020,4,10);
  fecha_5:Date = new Date(2020,5,10);
  fecha_6:Date = new Date(2020,6,10);
  fecha_7:Date = new Date(2020,7,10);
  fecha_8:Date = new Date(2020,8,10);
  fecha_9:Date = new Date(2020,9,10);
  fecha_10:Date = new Date(2020,10,10);
  fecha_11:Date = new Date(2020,11,10);

  

}
