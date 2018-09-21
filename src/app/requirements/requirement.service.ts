import { Injectable } from '@angular/core';
import { AngularFirestore, 
         AngularFirestoreCollection, 
         AngularFirestoreDocument } from 'angularfire2/firestore';
import { Requirement } from './requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  requirementsCollection: AngularFirestoreCollection<Requirement>;

  constructor(private afs: AngularFirestore) {
    this.requirementsCollection = this.afs.collection('posts', ref => 
      ref.orderBy('published', 'desc'))
    
  }
}

