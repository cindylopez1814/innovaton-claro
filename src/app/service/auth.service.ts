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
  user: Observable<firebase.User>;
  usersCollection: AngularFirestoreCollection<any>;

  constructor(private firebaseAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = firebaseAuth.authState;
    this.usersCollection = afs.collection<any>('usuario');
   }
}

signUp(email: string, password: string) {
  return this.firebaseAuth
  .auth
  .createUserWithEmailAndPassword(email, password);
}