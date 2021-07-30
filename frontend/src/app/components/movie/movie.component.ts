import { Component, OnInit } from '@angular/core';

import { Movie } from '../../interfaces/movie';

import Swal from "sweetalert2";
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-device',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[] = []
  movie: Movie = {
    movieId: 0,
    title: '',
    genres: '',
    typeFilter: 1,
  }
  constructor( private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getTypeFilter(type:number){
    
      this.movie.typeFilter = type;

      if(this.movie.typeFilter == 3)
        this.getMovies();
  }

  getMovies(){

    this.movie.title  = this.movie.title.trim();

    this.movieService.getMovies(this.movie.title).subscribe(movies => this.movies = movies)

  }

}
