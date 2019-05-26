import { Component, OnInit } from '@angular/core';
import { ClockService } from './clock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  clock;
  constructor(private clockService: ClockService) {}

  ngOnInit() {
    this.clockService.getClock.subscribe(clockData => {
      this.clock = clockData;
    });
  }

  onPause() {
    this.clock.stop(() => {});
  }

  onResume() {
    this.clock.start(() => {
      if (this.clock.$face.$value.$value === 0) {
        this.playAudio();
        this.clock.reset();
      }
    });
  }

  onReset() {
    this.clock.reset(() => {});
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '../assets/audio.wav';
    audio.load();
    audio.play();
  }
}
