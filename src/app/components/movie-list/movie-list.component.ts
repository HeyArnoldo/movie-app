import { Component, Input} from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: any;
  size: number = 10;
  @Input() cardSize: string = "col-xl-6";
  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies().subscribe(data => {
      this.movies = data;
    })
  }
}
