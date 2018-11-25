import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument,  AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../interface/user';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginTeraService {
  Uid: string;

  constructor(private firebaseAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.uploadUserToFire();
   }


  registro(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  entrar(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  salir() {
    return this.firebaseAuth.auth
      .signOut();
  }

  uploadUserToFire() {
    this.firebaseAuth.authState.subscribe(user => {
      if (user) { this.Uid = user.uid;
        console.log(this.Uid);
      }
    }
    );
  }
}
