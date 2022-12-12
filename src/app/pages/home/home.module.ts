import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { StatisticBoxComponent } from 'src/app/components/statistic-box/statistic-box.component';
import { WageInfoComponent } from 'src/app/components/wage-info/wage-info.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    StatisticBoxComponent,
    WageInfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
