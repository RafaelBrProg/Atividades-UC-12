import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Correção: styleUrl -> styleUrls
})
export class App {
  protected readonly title = signal('trabalho');
}