import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: any;
  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies().subscribe(data => {
      this.movies = data;
    })
  }
}
