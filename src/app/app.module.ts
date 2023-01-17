import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MoviePageComponent,
    MovieListComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
