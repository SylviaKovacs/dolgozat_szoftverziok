import { Component } from '@angular/core';
import { SzoftverziokComponent } from './szoftverziok/szoftverziok.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SzoftverziokComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'szoftverziok';
}
