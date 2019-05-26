import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';
import FlipClock from 'flipclock';

@Component({
  selector: 'app-long-break',
  templateUrl: './long-break.component.html',
  styleUrls: ['./long-break.component.css']
})
export class LongBreakComponent implements OnInit {
  clock;
  constructor(private clockService: ClockService) {}

  ngOnInit() {
    const el = document.querySelector('.clock');

    this.clock = new FlipClock(el, 1000, {
      countdown: true,
      clockFace: 'Counter',
      autoStart: false
    });

    this.clockService.getClock.next(this.clock);
  }
}
