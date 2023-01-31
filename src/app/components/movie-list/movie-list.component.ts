import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() cardSize: string = "col-xl-6";
  @Input() movies: any;
}
