import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlayersModule } from './pages/players/players.module';
import { HomeModule } from './pages/home/home.module';
import { WageModule } from './pages/wage/wage.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PlayersModule,
    WageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
