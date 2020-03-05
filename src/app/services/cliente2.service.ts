import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cancion } from '../model/cancion';

const URL = "http://10.250.5.26:8080/canciones";

@Injectable({
  providedIn: 'root'
})
export class Cliente2Service {

  constructor(private http: HttpClient) { }

  getAll():Observable<Cancion[]>{
    return this.http.get<Cancion[]>(URL);
  }

  getByCode(code:number):Observable<Cancion>{
    return this.http.get<Cancion>(URL + "/" + code);
  }

  create(cancion:Cancion):Observable<any>{
    return this.http.post(URL,cancion);
  }


}