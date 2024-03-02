import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pais } from '../modelos/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private endPointURL = 'http://localhost:3000/pais';

  constructor(private http: HttpClient) { }

  getPais(): Observable<Pais[]> {
    let result =  this.http.get<Pais[]>(this.endPointURL/*, {headers: this.header}*/);
    console.log("La información obtenida en el servicio es: ", result);

    return result;
  }

  getPaisNC(): Observable<any[]> {
    return this.http.get<Pais[]>(this.endPointURL)
              .pipe(map((resultPaises: Pais[]) => {
                return resultPaises.map(pais => {
                  return {
                    nombre: pais.nombre,
                    codigo: pais.id
                  }
                })
              }))
  }
   
}
