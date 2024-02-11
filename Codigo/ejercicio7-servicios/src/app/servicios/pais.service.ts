import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



import { Pais } from '../modelos/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //header=  new HttpHeaders().set("Authorization", "Token");

  //Ruta del JSON server
  private endPointURL = 'http://localhost:3000/pais';

  constructor(private http: HttpClient) { }

  getPais(): Observable<Pais[]> {
    let result =  this.http.get<Pais[]>(this.endPointURL/*, {headers: this.header}*/);
    console.log("La información obtenida en el servicio es: " + result);

    return result;
  }

  getPaisPorId(id: number): Observable<Pais> {
    return this.http.get<Pais>(`${this.endPointURL}/${id}`);
    //return this.paises[id];
  }

  createPais(pais: Pais): Observable<Pais>{
    return this.http.post<Pais>(this.endPointURL, pais);
  }

  updatePais(pais: Pais):Observable<Pais>{
    return this.http.put<Pais>(`${this.endPointURL}/${pais.id}`, pais); 
  }

  deletePais(id: number): Observable<Pais>{
    return this.http.delete<Pais>(`${this.endPointURL}/${id}`);
  }


  getPaisPorNombre(nombre: string): Observable<Pais>{
    let params = new HttpParams().set('nombre', nombre);

    return this.http.get<Pais>(this.endPointURL, {params});
  }


}
