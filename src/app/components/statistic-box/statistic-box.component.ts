import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-statistic-box',
  templateUrl: './statistic-box.component.html',
  styleUrls: ['./statistic-box.component.scss']
})
export class StatisticBoxComponent implements OnInit {

  players: number = 0;
  wages: number = 0;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe((players) => {
      //console.log(players);
      this.players = players.length;
      let wage = 0;
      players.forEach(player => {
        wage += player.wage;
      }
      );
      this.wages = wage;

    });

  }

}
