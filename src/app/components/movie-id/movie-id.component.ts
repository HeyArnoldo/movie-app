import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-id',
  templateUrl: './movie-id.component.html',
  styleUrls: ['./movie-id.component.css']
})
export class MovieIdComponent {
  movie: any;
  id: string;
  moviesData: any;
  constructor(private route:ActivatedRoute, private moviesService: MoviesService, private _sanitizer: DomSanitizer) {
    this.id = this.route.snapshot.params['id'];
    this.moviesService.getMovie(this.id).subscribe(data => {
      this.movie = data;
    });
    this.moviesService.getMovies().subscribe(data => { 
      const reducedData = () =>{
        let moviesData = [];
        for (let i = 0; i < 3; i++) {
          let randomNumber = Math.floor(Math.random() * data.length);
          moviesData.push(data[randomNumber]);
        }
        return moviesData;
      }
      this.moviesData = reducedData();
    });
  }
  safeURL(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
