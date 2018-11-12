import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Requirement } from './requirement';
import { Definition } from '../definitions/definition';


@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  requirementsCollection: AngularFirestoreCollection<Requirement>;
  requirementDoc: AngularFirestoreDocument<Requirement>;

  definitionsCollection: AngularFirestoreCollection<Definition>;
  definitionDoc: AngularFirestoreDocument<Definition>;

  constructor(private afs: AngularFirestore) {
    this.requirementsCollection = this.afs.collection('requirements', ref =>
      ref.orderBy('title', 'asc'));
    this.definitionsCollection = this.afs.collection('definitions', ref =>
      ref.orderBy('term', 'asc'));
  }

  getRequirements() {
    return this.requirementsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Requirement;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
  }

  getDefinitions() {
    return this.definitionsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Definition;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
  }

  getRequirementData(id: string) {
    this.requirementDoc = this.afs.doc<Requirement>(`requirements/${id}`);
    return this.requirementDoc.valueChanges();
  }

  getDefinitionData(id: string) {
    this.definitionDoc = this.afs.doc<Definition>(`definitions/${id}`);
    return this.definitionDoc.valueChanges();
  }

  create(data: Requirement) {
    this.requirementsCollection.add(data);
  }

  createDef(data: Definition) {
    this.definitionsCollection.add(data);
  }

  getRequirement(id: string) {
    return this.afs.doc<Requirement>(`requirements/${id}`);
  }

  getDefinition(id: string) {
    return this.afs.doc<Definition>(`definitions/${id}`);
  }

  update(id: string, formData) {
    return this.getRequirement(id).update(formData);
  }

  updateDefinition(id: string, formData) {
    return this.getDefinition(id).update(formData);
  }

  delete(id: string) {
    return this.getRequirement(id).delete();
  }

  deleteDefinition(id: string) {
    return this.getDefinition(id).delete();
  }
}
