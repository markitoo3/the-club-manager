import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/interfaces/players.model';
import { PlayersService } from 'src/app/services/players.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  players$?: Observable<Player[]>;

  constructor(private playersService: PlayersService, private activeroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPlayers();
  }


  getPlayers(): Observable<Player[]> {
    return this.players$ = this.playersService.getPlayers();
  }

  getPlayerDetails(id: number) {
    this.router.navigate([`${id}`], { relativeTo: this.activeroute });
  }

  deletePlayer(id: number) {
    this.playersService.deletePlayer(id)
  }

  addPlayer() {
    this.router.navigate([`add`], { relativeTo: this.activeroute });
  }
}
