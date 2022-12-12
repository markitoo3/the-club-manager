import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from 'src/app/interfaces/players.model';
import { Team } from 'src/app/interfaces/teams.model';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-wage-team',
  templateUrl: './wage-team.component.html',
  styleUrls: ['./wage-team.component.scss']
})
export class WageTeamComponent implements OnInit {

  teams$: Observable<Team[]> = new Observable<Team[]>();
  players$?: Observable<Player[]>;

  constructor(private playersService: PlayersService, private activeroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.teams$ = this.playersService.getTeams();
    this.players$ = this.playersService.getPlayers();
  }

  getPlayerDetails(id: number) {
    this.router.navigate([`${id}`], { relativeTo: this.activeroute });
  }

  deletePlayer(id: number) {
    this.playersService.deletePlayer(id)
  }

}
