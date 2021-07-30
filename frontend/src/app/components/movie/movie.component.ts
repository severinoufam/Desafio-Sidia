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

  public years:number[] = new Array()

  movies: Movie[] = []
  movie: Movie = {
    movieId: 0,
    title: '',
    genres: '',
    typeFilter: 0,
    yearFilter:0,
    rating:1,
  }
  constructor( private movieService: MovieService) { }

  ngOnInit(): void {

    const dataAtual = new Date().getFullYear()
    this.movie.yearFilter = dataAtual
    this.movie.typeFilter = 1

    for(let year = dataAtual; year >= 1994 ; year--)this.years.push(year)

    this.getMoviesTitle();
  }

  getTypeFilter(type:number){
      this.movie.title = ''
      this.movie.typeFilter = type;
  }

  searchMovies(){
      switch(this.movie.typeFilter){
        case 1:
          this.getMoviesTitle()
          break;
        case 2:
          this.getMoviesYearGenres()
          break;
        case 3:
          this.getMoviesEvaluationStars()
          break;
      }
  }

  getMoviesTitle(){
 
    this.movie.title  = this.movie.title.trim();
    this.movieService.getMoviesTitle(this.movie.title).subscribe(movies => this.movies = movies)

  }

  getMoviesYearGenres(){

    this.movie.genres  = this.movie.title.trim();
    this.movieService.getMoviesYearGenres(this.movie.yearFilter,this.movie.genres).subscribe(movies => this.movies = movies)

  }

  getMoviesEvaluationStars(){
    this.movieService.getMoviesEvaluationStars(this.movie.rating).subscribe(movies => this.movies = movies)
  }

}
