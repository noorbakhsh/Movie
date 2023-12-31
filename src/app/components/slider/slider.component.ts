import { state, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  // animations:[
  //   trigger("slideFade", [
  //     state("void", style( ))
  //   ])
  // ]
})
export class SliderComponent implements OnInit{
  constructor(private http: HttpClient) { 

  }
ngOnInit() {
  console.log('hello component');
}
} 
