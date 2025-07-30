import { Component, signal } from '@angular/core';
import { Walterer } from "./walterer/walterer";

@Component({
  selector: 'app-root',
  imports: [Walterer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('stroczDashboard');
}
