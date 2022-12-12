import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WageRoutingModule } from './wage-routing.module';
import { WageInfoBoxComponent } from 'src/app/components/wage-info-box/wage-info-box.component';
import { WageInputComponent } from 'src/app/components/wage-input/wage-input.component';
import { WageTeamComponent } from 'src/app/components/wage-team/wage-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WageComponent } from './wage.component';



@NgModule({
  declarations: [
    WageComponent,
    WageInfoBoxComponent,
    WageInputComponent,
    WageTeamComponent
  ],
  imports: [
    CommonModule,
    WageRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class WageModule { }
