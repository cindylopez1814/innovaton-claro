
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument,  AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../interface/user';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  Uid: string;
  user:string;
  constructor(private firebaseAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.uploadUserToFirestore();
   }


   signUp(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logOut() {
    return this.firebaseAuth.auth
      .signOut();
  }

  uploadUserToFirestore() {
    this.firebaseAuth.authState.subscribe(user => {
      if (user) { this.Uid = user.uid;
        console.log(this.Uid);
      }
    }
    );
  }

}
