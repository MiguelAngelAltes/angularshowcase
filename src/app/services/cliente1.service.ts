import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cliente1Service {

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{

    return this.http.get("https://restcountries.eu/rest/v2/all/");

  }

  getPais(nombre:string): Observable<any>{
    return this.http.get("https://restcountries.eu/rest/v2/name/" + nombre);
  }

  getNombre():string{
    return "Pepín";
  }


}
