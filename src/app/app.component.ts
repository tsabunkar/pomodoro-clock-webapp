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
      console.log(clockData);
      this.clock = clockData;
    });
  }

  onPause() {
    this.clock.stop(() => {
      console.log('stop method is triggered');
    });
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
    this.clock.reset(() => {
      console.log('onReset method is triggered');
    });
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '../assets/audio.wav';
    audio.load();
    audio.play();
  }
}
