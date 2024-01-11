
import { Component, OnInit } from '@angular/core';


import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { MoviesService } from '../../services/movies.service';



@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [ JsonPipe, AsyncPipe, NgIf, NgFor],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',

  // animations:[
  //   trigger("slideFade", [
  //     state("void", style( ))
  //   ])
  // ]
})
export class SliderComponent implements OnInit{
  constructor(private moviesService: MoviesService) { }

  movies$ = this.moviesService.getPopularMovies()

  slideIndex=0
ngOnInit() {
  setInterval(() => {
    this.slideIndex +=1
  }, 5000)
}

}
