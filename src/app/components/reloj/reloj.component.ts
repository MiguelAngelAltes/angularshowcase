import { Component } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent {

  display:string = "00:00:00";
  incremento:number = 1;
  totalSegundos:number = 0;
  interval_ID:any = undefined;

  start():void {
    this.interval_ID = setInterval(() => {

      let horas     = ("0" +  Math.floor(this.totalSegundos / 3600)).slice(-2);
      let minutos   = ("0" +  Math.floor(this.totalSegundos / 60 % 60)).slice(-2);
      let segundos  = ("0" +  Math.floor(this.totalSegundos % 60)).slice(-2);

      this.display = horas + ":" + minutos + ":" + segundos;

      this.totalSegundos += this.incremento;

    }, 10);
  }

  pause():void {
    clearInterval(this.interval_ID);
  }

  resume():void {
    this.start();
  }

  reset():void {
    this.totalSegundos = 0;
    this.pause();
    this.display = "00:00:00";
    this.incremento = 1;
  }

  invert():void {
    this.incremento *= -1;
  }

}
