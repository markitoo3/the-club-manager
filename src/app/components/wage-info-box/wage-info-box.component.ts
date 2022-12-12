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

  getFinancialStatus(currentMoney: number, monthlyIncome: number, totalWages: number): string{
    if(totalWages! < monthlyIncome!) {
      return `The club is financial stable`
    } else {
      let month = 0;
      currentMoney = currentMoney! + (monthlyIncome! - totalWages!)
      while(currentMoney > 0){
        month++;
        currentMoney = currentMoney! + (monthlyIncome! - totalWages!)
      }
      return month === 1 ? `The club's financial reserves run out after 1 month` : `The club's financial reserves run out after ${month} months`
    }
  }



}
