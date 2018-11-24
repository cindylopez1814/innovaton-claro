import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerapeutaDashboardComponent } from './components/terapeuta-dashboard/terapeuta-dashboard.component';
import { MapaUserComponent } from './components/mapa-user/mapa-user.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'terapeuta', component: TerapeutaDashboardComponent
  },
  {
    path: 'Home', component: MapaUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
