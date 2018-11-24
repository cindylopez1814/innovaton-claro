import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerapeutaDashboardComponent } from './components/terapeuta-dashboard/terapeuta-dashboard.component';
import { MapaUserComponent } from './components/mapa-user/mapa-user.component';

const routes: Routes = [
  {
    path: 'terapeuta', component: TerapeutaDashboardComponent
  },
  {
    path: 'map', component: MapaUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
