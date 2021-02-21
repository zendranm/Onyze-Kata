import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss'],
})
export class JourneyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() route: any;
}
