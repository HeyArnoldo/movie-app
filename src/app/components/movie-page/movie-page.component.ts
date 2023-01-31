import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent {
  movieData: any; 
  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies().subscribe((data) => {
      this.movieData = data;
    });
  }
}
