import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-id',
  templateUrl: './movie-id.component.html',
  styleUrls: ['./movie-id.component.css']
})
export class MovieIdComponent {
  movie: any;
  id: string;
  constructor(private router:Router, private route:ActivatedRoute, private moviesService: MoviesService) {
    this.id = this.route.snapshot.params['id'];
    this.moviesService.getMovie(this.id).subscribe(data => {
      this.movie = data;
    });
  }
}
