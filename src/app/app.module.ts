import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { ShortBreakComponent } from './short-break/short-break.component';
import { LongBreakComponent } from './long-break/long-break.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, PomodoroComponent, ShortBreakComponent, LongBreakComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
