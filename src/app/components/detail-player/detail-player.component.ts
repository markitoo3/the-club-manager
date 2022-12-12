import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/interfaces/players.model';
import { PlayersService } from 'src/app/services/players.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.component.html',
  styleUrls: ['./detail-player.component.scss']
})
export class DetailPlayerComponent implements OnInit {

  player$: Observable<Player> = new Observable<Player>();

  constructor(public playersService: PlayersService, private activeroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activeroute.params.subscribe(params => {
      this.getPlayer(params['id'])
    });

    console.log(this.player$)

  }

  getPlayer(id: number) {
    this.player$ = this.playersService.getPlayer(id);
  }

  editPlayer() {
    this.router.navigate([`edit`], { relativeTo: this.activeroute });
  }

  deletePlayer() {
    this.playersService.deletePlayer(this.activeroute.snapshot.params['id']);
    this.router.navigate(['/players']);
  }
}

