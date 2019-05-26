import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';
import FlipClock from 'flipclock';

@Component({
  selector: 'app-short-break',
  templateUrl: './short-break.component.html',
  styleUrls: ['./short-break.component.css']
})
export class ShortBreakComponent implements OnInit {
  clock;
  constructor(private clockService: ClockService) {}

  ngOnInit() {
    const el = document.querySelector('.clock');

    this.clock = new FlipClock(el, 500, {
      countdown: true,
      clockFace: 'Counter',
      autoStart: false
    });

    this.clockService.getClock.next(this.clock);
  }
}
