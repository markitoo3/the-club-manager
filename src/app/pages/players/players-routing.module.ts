import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players.component';
import { DetailPlayerComponent } from 'src/app/components/detail-player/detail-player.component';
import { EditPlayerComponent } from 'src/app/components/edit-player/edit-player.component';
import { PlayersListComponent } from 'src/app/components/players-list/players-list.component';
import { AddPlayerComponent } from 'src/app/components/add-player/add-player.component';

const routes: Routes = [
  { path: '', component: PlayersComponent, children: [
    { path: '', component: PlayersListComponent },
    { path: 'add', component: AddPlayerComponent },
    { path: ':id', component: DetailPlayerComponent },
    { path: ':id/edit', component: EditPlayerComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PlayersRoutingModule { }

