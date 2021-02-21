import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../Passengers';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.scss'],
})
export class PassengerInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() passenger: Passenger;

  photo = 'image';
  interactions = 4;
  email = 'duckandchick@gmail.com';
  phone = '123 456 789';
  location = 'New York, NY';
}
