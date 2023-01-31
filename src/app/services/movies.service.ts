import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movies } from '../interface/movies';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url:string = 'https://api.heldencraft.tk/movies';
  constructor(private http: HttpClient) {}
  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.url);
  }
  getMovie(id: string): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/${id}`);
  }
}
