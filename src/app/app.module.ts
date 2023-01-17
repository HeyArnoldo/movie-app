import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrendingComponent } from './components/trending/trending.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { WatchLaterComponent } from './components/watch-later/watch-later.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieIdComponent } from './components/movie-id/movie-id.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MoviePageComponent,
    MovieListComponent,
    MainPageComponent,
    TrendingComponent,
    ComingSoonComponent,
    FavouritesComponent,
    WatchLaterComponent,
    PageNotFoundComponent,
    MovieIdComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    YouTubePlayerModule,
    RouterModule.forRoot([
      {path: '', component: MoviePageComponent},
      {path: 'coming-soon', component: ComingSoonComponent},
      {path: 'trending', component: TrendingComponent},
      {path: 'favourites', component: FavouritesComponent},
      {path: 'watch-later', component: WatchLaterComponent},
      {path: 'movie/:id', component: MovieIdComponent},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
