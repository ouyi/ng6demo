import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly goal']);

  obsGoals = this.goals.asObservable();

  constructor() { }

  changeGoals(newGoals) {
    this.goals.next(newGoals);
  }
}
