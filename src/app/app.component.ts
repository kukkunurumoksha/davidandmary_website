import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Redeploy trigger - 2026-04-21
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'davidandmary-academy-app';
}
