import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

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
import { StarRatingModule } from 'angular-star-rating';
import { AcelerometroComponent } from './sensores/acelerometro/acelerometro.component';

@NgModule({
  declarations: [
    AppComponent,
    TerapeutaDashboardComponent,
    MapaUserComponent,
    FormValidationComponent,
    LoginComponent,
    AvatarComponent,
    AcelerometroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    StarRatingModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
