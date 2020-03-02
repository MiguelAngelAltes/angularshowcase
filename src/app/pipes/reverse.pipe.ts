import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let splitString = value.split("");        // creo un array
    let reverseArray = splitString.reverse(); // el array tienen un método para revertir
    return reverseArray.join("");             // devuelvo el array "rejuntado" como string
  }

}
