import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WageService {

  currentMoney: number = 0;
  currentClubMoney$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  monthlyClubIncome$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    this.currentClubMoney$.next(this.currentMoney);
    this.monthlyClubIncome$.next(1100001020);
  }

  addMoney(money: number) {
    this.currentClubMoney$.next(money)
  }

  addMonthlyIncome(money: number) {
    this.monthlyClubIncome$.next(money)
  }
}
