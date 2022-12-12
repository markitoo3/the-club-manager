import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)},
  { path: 'players', loadChildren: () => import('./pages/players/players.module').then(module => module.PlayersModule)},
  { path: 'wage', loadChildren: () => import('./pages/wage/wage.module').then(module => module.WageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
