import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Home } from './home/home';
import { Left } from './home/left/left';
import { Right } from './home/right/right';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Nav,Home,Left,Right],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first');
}
