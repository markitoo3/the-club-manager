import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { Player } from 'src/app/interfaces/players.model';

@Component({
  selector: 'app-wage-info',
  templateUrl: './wage-info.component.html',
  styleUrls: ['./wage-info.component.scss']
})
export class WageInfoComponent implements OnInit {

  highestWage: number;
  highestWagePlayer: string;

  constructor(private playersService: PlayersService) {
    this.highestWagePlayer = "";
    this.highestWage = 0;
  }

  ngOnInit(): void {

    this.playersService.getPlayers().subscribe((players) => {
      players.forEach(player => {
        if (player.wage > this.highestWage) {
          this.highestWage = player.wage;
          this.highestWagePlayer = player.name;
        }
        else {
          return;
        }
      });
      //console.log(highestWagePlayer!.name + " has the highest wage of " + highestWage);
    }
    );

  }

}
