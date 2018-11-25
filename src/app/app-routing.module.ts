import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerapeutaDashboardComponent } from './components/terapeuta-dashboard/terapeuta-dashboard.component';
import { MapaUserComponent } from './components/mapa-user/mapa-user.component';
import { LoginComponent } from './components/login/login.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { LogrosComponent } from './components/logros/logros.component';
import { RankComponent } from './components/rank/rank.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'terapeuta', component: TerapeutaDashboardComponent
  },
  {
    path: 'Home', component: MapaUserComponent
  },
  {
    path: 'Start', component: AvatarComponent
  },
  {
    path: 'Ranking', component: RankComponent
  },
  {
    path: 'Logros', component: LogrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
