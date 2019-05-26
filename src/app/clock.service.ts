import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  private clock = new Subject<any>();

  constructor() {}

  public get getClock(): any {
    return this.clock;
  }
}
