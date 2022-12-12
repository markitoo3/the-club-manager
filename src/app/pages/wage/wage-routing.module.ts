import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPlayerComponent } from 'src/app/components/detail-player/detail-player.component';
import { EditPlayerComponent } from 'src/app/components/edit-player/edit-player.component';
import { WageComponent } from './wage.component';

const routes: Routes = [
  { path: '', component: WageComponent },
  { path: ':id', component: DetailPlayerComponent},
  { path: ':id/edit', component: EditPlayerComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WageRoutingModule { }
