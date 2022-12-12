import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersListComponent } from 'src/app/components/players-list/players-list.component';
import { AddPlayerComponent } from 'src/app/components/add-player/add-player.component';
import { DetailPlayerComponent } from 'src/app/components/detail-player/detail-player.component';
import { EditPlayerComponent } from 'src/app/components/edit-player/edit-player.component';
import { PlayersRoutingModule } from './players-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlayersComponent,
    PlayersListComponent,
    AddPlayerComponent,
    DetailPlayerComponent,
    EditPlayerComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    ReactiveFormsModule
  ]
})
export class PlayersModule { }
