import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movies } from '../interface/movies';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url:string = 'http://localhost:5000/api/movies/';
  constructor(private http: HttpClient) {}
  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.url);
  }
}
