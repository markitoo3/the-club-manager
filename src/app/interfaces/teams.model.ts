import { Player } from "./players.model";

export interface Team {
  teamName: string;
  sumWage: number;
  players: Player[];
}
