import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { ShortBreakComponent } from './short-break/short-break.component';
import { LongBreakComponent } from './long-break/long-break.component';

const routes: Routes = [
  { path: '', component: PomodoroComponent },
  { path: 'short', component: ShortBreakComponent },
  { path: 'long', component: LongBreakComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
