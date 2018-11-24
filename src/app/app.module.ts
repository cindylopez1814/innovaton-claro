import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerapeutaDashboardComponent } from './components/terapeuta-dashboard/terapeuta-dashboard.component';
import { MapaUserComponent } from './components/mapa-user/mapa-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TerapeutaDashboardComponent,
    MapaUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
