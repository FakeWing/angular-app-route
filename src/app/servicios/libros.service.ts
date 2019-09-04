import { Injectable } from '@angular/core';
import { LibrosInterface } from '../modelos/libros';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  
  private restURL = "http://localhost:8089/libros/";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(private http: HttpClient) { }

  public getLibro(id: number): Observable<LibrosInterface> {
    return this.http.get<LibrosInterface>(this.restURL + id);
  }

  public getLibros(){
    return this.http.get(this.restURL);
  }

  public deleteLibro(id:number):Observable<LibrosInterface>{
    return this.http.delete<LibrosInterface>(this.restURL+id);
  }
  
  public putLibro(id: number, libro: LibrosInterface): Observable<LibrosInterface> {
    return this.http.put<LibrosInterface>(this.restURL + id, libro, this.httpOptions);

  }

  public postLibro(libro:LibrosInterface): Observable<LibrosInterface>{
    return this.http.post<LibrosInterface>(this.restURL, libro, this.httpOptions);
  }
}