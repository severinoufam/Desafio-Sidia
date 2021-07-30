import { Component, OnInit } from '@angular/core';

import { Movie } from '../../interfaces/movie';

import Swal from "sweetalert2";

@Component({
  selector: 'app-device',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = []
  constructor( ) { }

  ngOnInit(): void {

  }

}
