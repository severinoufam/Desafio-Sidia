import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Movie } from "../interfaces/movie";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl = environment.API_URL+'v1/movies';

  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  /**  Busca todos os filme */
  getMoviesTitle(title: string): Observable<Movie[]> {

    const url = `${this.movieUrl}/${title}`;

    return this.http.get<Movie[]>(url)
      .pipe(
        tap(() => this.log('fetched movie')),
        catchError(this.handleError<Movie[]>('getMoviesTitle', []))
      );
  }

    /**  Busca  os filme por ano e genero*/
    getMoviesYearGenres(year: number,genres:string): Observable<Movie[]> {

      const url = `${this.movieUrl}/${year}/${genres}`;

      return this.http.get<Movie[]>(url)
        .pipe(
          tap(() => this.log('fetched movie')),
          catchError(this.handleError<Movie[]>('getMoviesYearGenres', []))
        );
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log do Movie.service */
  private log(message: string) {
    console.log(message);
  }
}
