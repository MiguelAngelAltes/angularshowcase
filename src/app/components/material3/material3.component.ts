import { Component } from '@angular/core';

@Component({
  selector: 'app-material3',
  templateUrl: './material3.component.html',
  styleUrls: ['./material3.component.css']
})
export class Material3Component {

  nombre = "Pepín";
  apellido1 = "Gálvez";
  apellido2 = "Ridruejo";
  
  fechaNacimiento:Date = new Date(2020,0,1);
  
}
