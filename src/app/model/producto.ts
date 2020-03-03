export class Producto {

    nombre:string = undefined;
    precio:number = undefined;
    codigo:number = undefined;

    constructor(nombre:string,precio:number,codigo:number){
        this.nombre = nombre;
        this.precio = precio;
        this.codigo = codigo;
    }

}