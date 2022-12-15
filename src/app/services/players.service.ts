import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Player } from '../interfaces/players.model';
import { Team } from '../interfaces/teams.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private players: Player[];
  nextId: number;

  constructor() {

    this.players = [
      {
        id: 1,
        name: 'Lionel Messi',
        position: 'Forward',
        team: 'Barcelona',
        age: 33,
        wage: 560000,
        endOfContract: new Date('2024-06-30')
      },
      {
        id: 2,
        name: 'Cristiano Ronaldo',
        position: 'Forward',
        team: 'Juventus',
        age: 36,
        wage: 480000,
        endOfContract: new Date('2023-06-30')
      },
      {
        id: 3,
        name: 'Neymar Jr',
        position: 'Forward',
        team: 'Paris Saint-Germain',
        age: 29,
        wage: 500000,
        endOfContract: new Date('2025-06-30')
      },
      {
        id: 4,
        name: 'Kylian Mbappé',
        position: 'Forward',
        team: 'Paris Saint-Germain',
        age: 23,
        wage: 300000,
        endOfContract: new Date('2026-02-30')
      },
      {
        id: 5,
        name: 'Mohamed Salah',
        position: 'Forward',
        team: 'Liverpool',
        age: 29,
        wage: 300000,
        endOfContract: new Date('2024-06-30')
      },
      {
        id: 6,
        name: 'Kevin De Bruyne',
        position: 'Midfielder',
        team: 'Manchester City',
        age: 30,
        wage: 400000,
        endOfContract: new Date('2025-06-30')
      },
      {
        id: 7,
        name: 'Sadio Mané',
        position: 'Forward',
        team: 'Liverpool',
        age: 29,
        wage: 300000,
        endOfContract: new Date('2024-06-30')
      },
      {
        id: 8,
        name: 'Sergio Ramos',
        position: 'Defender',
        team: 'Real Madrid',
        age: 35,
        wage: 300000,
        endOfContract: new Date('2023-06-30')
      },
      {
        id: 9,
        name: 'Luis Suárez',
        position: 'Forward',
        team: 'Barcelona',
        age: 34,
        wage: 300000,
        endOfContract: new Date('2024-03-21')
      },
      {
        id: 10,
        name: 'Paul Pogba',
        position: 'Midfielder',
        team: 'Manchester United',
        age: 28,
        wage: 300000,
        endOfContract: new Date('2025-07-16')
      },
    ];

    this.nextId = this.players.length + 1;
   }

  getPlayers(): Observable<Player[]> {
    return of(this.players).pipe(players => players);
  }

  getPlayer(id: number): Observable<Player> {
    return of(this.players).pipe(
      map(players => {
        let selectedPLayer = players.find(player => player.id == id);
        return selectedPLayer!
      })
    )
  }

  addPlayer(player: Player): Observable<Player> {
    let newPlayers = this.players;
    player.id = Date.now();
    newPlayers.push(player);
    this.players = newPlayers;

    return of(player);
  }

  //1671017808230

  overWritePlayer(player: Player): Observable<Player> {


      let playerId = this.players.findIndex(p => p.id === player.id);
      if (playerId > -1) {
        this.players[playerId] = {...player};
        return of(player);
      } else {
        return of();
      }
  }

  deletePlayer(id: number): Observable<Player> {
    let playerId = this.players.findIndex(p => p.id === id);
    if (playerId > -1) {
      let deletedPlayer = this.players[playerId];
      this.players.splice(playerId, 1);
      return of(deletedPlayer);
    } else {
      return of();
    }
  }

  getSumWage(): Observable<number> {
    return of(this.players).pipe(
      map(p => {
        let sumWage = 0;
        p.forEach(player => sumWage += player.wage);
        return sumWage;
      })
    );
  }

  getTeams(): Observable<Team[]> {

    return of(this.players).pipe(
      map(players => {
        let teams: Team[] = [];
        players.forEach(player => {
          let team = teams.find(t => t.teamName === player.team);
          if (team) {
            team.players.push(player);
            team.sumWage += player.wage;
          } else {
            teams.push({ teamName: player.team, players: [player], sumWage: player.wage });
          }
        });
        return teams;
      })
    );
  }

}
