import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayersService } from 'src/app/services/players.service';
import { WageService } from 'src/app/services/wage.service';

@Component({
  selector: 'app-wage-info-box',
  templateUrl: './wage-info-box.component.html',
  styleUrls: ['./wage-info-box.component.scss']
})
export class WageInfoBoxComponent implements OnInit {

  totalWages$: Observable<number>
  currentMoney$: Observable<number>
  monthlyIncome$: Observable<number>

  constructor(private playersService: PlayersService, public wageService: WageService) {
    this.totalWages$ = this.playersService.getSumWage()
    this.currentMoney$ = this.wageService.currentClubMoney$;
    this.monthlyIncome$ = this.wageService.monthlyClubIncome$;
   }

  ngOnInit(): void {
  }

  getFinancialStatus(currentMoney: number, monthlyIncome: number, totalWages: number): string {

    let financialStatus: string = "";
    let monthlyExpenses: number = totalWages;
    let months: number = 0;

    if (monthlyIncome > monthlyExpenses) {
      months = currentMoney / (monthlyIncome - monthlyExpenses);
      return financialStatus = "The club is in a good financial status";
    }
    else if (monthlyIncome < monthlyExpenses) {
      months = currentMoney / (monthlyIncome - monthlyExpenses);
      return financialStatus = "The club's financial reserves run out after " + months + " months";
    }
    else {
      months = currentMoney / (monthlyIncome - monthlyExpenses);
      return financialStatus = "The club is in a neutral financial status";
    }

  }









}
