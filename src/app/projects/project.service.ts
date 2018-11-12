import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Project } from './project';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsCollection: AngularFirestoreCollection<Project>;
  projectDoc: AngularFirestoreDocument<Project>;
  data: any;

  constructor(private afs: AngularFirestore) {
    this.projectsCollection = afs.collection('projects');
  }

  getProjects() {
    return this.projectsCollection.snapshotChanges()
    .pipe(map(actions => {
      return actions.map(snap => {
        const data = snap.payload.doc.data();
        const id = snap.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  // getProjects() {
    // return this.projectsCollection.valueChanges();
  // }

  // This doesn't actually do anything useful. We already get the project details by iterating over the
  // projectsCollection and returning valueChanges(). This should actually enable us to progress to
  // use the project, or change to another one. Somehow...
  loadProjectData(id) {
    this.projectDoc = this.afs.doc<Project>(`projects/${id}`);
    return this.projectDoc.valueChanges();

  }


}
