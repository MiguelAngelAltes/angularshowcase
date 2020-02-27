import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorTemperaturaService {

  convertir(temperatura:number, medidaEntrada:string, medidaSalida:string): number{

    let temperaturaCelsius:number = undefined;
    let temperaturaSalida:number = undefined;

    switch(medidaEntrada){
      case "celsius":   temperaturaCelsius = temperatura;
                        break;
      case "farenheit": temperaturaCelsius = (temperatura -32)/1.8;
                        break;
      case "kelvin":    temperaturaCelsius = temperatura - 273.15;
                        break;
    }

    switch(medidaSalida){
      case "celsius":   temperaturaSalida = temperaturaCelsius;
                        break;
      case "farenheit": temperaturaSalida = (temperaturaCelsius * 1.8) + 32
                        break;
      case "kelvin":    temperaturaSalida = temperaturaCelsius + 273-15;
                        break;
    }

    return temperaturaSalida;
  }
  
}
