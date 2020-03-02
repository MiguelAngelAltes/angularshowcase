import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimestre'
})
export class TrimestrePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {

    let mes = value.getMonth();

    let trimestre = Math.floor(mes / 3) + 1;    

    return trimestre + "T";
  }

}
