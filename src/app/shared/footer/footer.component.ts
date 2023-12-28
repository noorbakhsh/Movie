import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  date: Date = new Date();
}
