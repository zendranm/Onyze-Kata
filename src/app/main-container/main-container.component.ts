import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../Passengers';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() passenger: Passenger;
}
