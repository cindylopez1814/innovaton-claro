import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerapeutaDashboardComponent } from './components/terapeuta-dashboard/terapeuta-dashboard.component';
import { MapaUserComponent } from './components/mapa-user/mapa-user.component';
import { LoginComponent } from './components/login/login.component';
import { AvatarComponent } from './components/avatar/avatar.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
