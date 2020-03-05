export class Cancion{

    codigo:number = undefined;
    titulo:string = undefined;
    creada:string;
    duracion:number;

    constructor(codigo:number,titulo:string,creada:string,duracion:number){
        this.codigo = codigo;
        this.titulo = titulo;
        this.creada = creada;
        this.duracion = duracion;
    }
}