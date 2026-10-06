import { Component, signal } from '@angular/core';
import { Main } from './components/main/main';
import { Header } from './components/header/header';
import { Aside } from './components/aside/aside';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Main, Header, Aside, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('evaluacionParcial');
}
