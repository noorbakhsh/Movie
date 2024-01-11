import { Component } from '@angular/core';
import { SliderComponent } from "../../components/slider/slider.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SliderComponent]
})
export class HomeComponent {

}
