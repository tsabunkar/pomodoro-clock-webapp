import { Component, OnInit } from '@angular/core';
import FlipClock from 'flipclock';
import { ClockService } from '../clock.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  clock;
  constructor(private clockService: ClockService) {}

  ngOnInit() {
    const el = document.querySelector('.clock');

    this.clock = new FlipClock(el, 3000, {
      countdown: true,
      clockFace: 'Counter',
      autoStart: false
    });

    this.clockService.getClock.next(this.clock);
  }
  /*  onPause() {
    this.clock.stop(() => {
      console.log('stop method is triggered');
    });
  }

  onResume() {
    this.clock.start(() => {
      if (this.clock.$face.$value.$value === 0) {
        this.clock.reset();
      }
    });
  }

  onReset() {
    this.clock.reset(() => {
      console.log('onReset method is triggered');
    });
  } */
}
