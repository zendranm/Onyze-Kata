import { Component } from '@angular/core';
import { Passengers } from './Passengers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Onyze Kata';
  passengers = Passengers;
}
