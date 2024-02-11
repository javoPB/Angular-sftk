import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { Pais } from '../modelos/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {
  private endPointUrl = 'http://localhost:3000/pais';
  private _valor: string = 'miValor';
  public cambiosMiValor: BehaviorSubject<string> = new BehaviorSubject<string>(this._valor);

  constructor(private http: HttpClient) { }

  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.endPointUrl);
  }

  getPaisPorId(id: number): Observable<Pais> {
    let params: HttpParams = new HttpParams().set('id', id);

    return this.http.get<Pais>(`${this.endPointUrl}/${id}`);
  }

  getPaisPorNombre(nombre: string): Observable<Pais> {
    let params: HttpParams = new HttpParams().set('nombre', nombre);

    return this.http.get<Pais>(this.endPointUrl, {params})
  }


  updatePais(pais: Pais): Observable<Pais> {
    return this.http.put<Pais>(`${this.endPointUrl}/${pais.id}`, pais);
  }

  createPais(newPais: Pais): Observable<Pais>{
    return this.http.post<Pais>(this.endPointUrl, newPais);
  }

  deletePais(id: number): Observable<Pais>{
    let params: HttpParams = new HttpParams().set('id', id);

    return this.http.delete<Pais>(`${this.endPointUrl}/${id}`);
  }

  public get valor(): string{
    return this._valor;
  }

  public set valor(valor: string){
    //this._valor = valor;
    this.cambiosMiValor.next(valor);
  }

}
