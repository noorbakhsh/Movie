import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDto } from '../types/movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }
  getPopularMovies(){
    return this.http.get<MoviesDto>('https://api.themoviedb.org/3/movie/popular?api_key=5900477ec4168f9b054826d43e2d2bc1')
  }
}
