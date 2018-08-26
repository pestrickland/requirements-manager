import { Injectable } from '@angular/core';
import { Requirement } from './requirement';
import { REQUIREMENTS } from './example-requirements';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  private itemDoc: AngularFirestoreDocument<Item>;
  items: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.items = db.collection('requirements').valueChanges();
    this.itemDoc = db.doc<Item>('requirements/1');
  }

  // getRequirements(): Observable<Requirement[]> {
      // return this.items;
  // }

  getRequirements(): Requirement[] {
    return REQUIREMENTS;
  }
}
