import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { TerapeutaDashboardComponent } from './components/terapeuta-dashboard/terapeuta-dashboard.component';
import { MapaUserComponent } from './components/mapa-user/mapa-user.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AvatarComponent } from './components/avatar/avatar.component';

import { AuthService } from './service/auth.service';


import { HeaderComponent } from './components/header/header.component';


import { LogrosComponent } from './components/logros/logros.component';
import { RankComponent } from './components/rank/rank.component';
import { AcelerometroComponent } from './sensores/acelerometro/acelerometro.component';
import { MenuComponent } from './components/menu/menu.component';

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
  // {
  //   path: 'acelerometro', component: AcelerometroComponent
  // }
];


@NgModule({
  declarations: [
    AppComponent,
    TerapeutaDashboardComponent,
    MapaUserComponent,
    FormValidationComponent,
    LoginComponent,
    AvatarComponent,

    HeaderComponent,
    LogrosComponent,
    RankComponent,

    AcelerometroComponent,
    MenuComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
