import { Injectable } from '@angular/core';
import { AngularFirestore, 
         AngularFirestoreCollection, 
         AngularFirestoreDocument } from 'angularfire2/firestore';
import { Requirement } from './requirement';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  requirementsCollection: AngularFirestoreCollection<Requirement>;
  requirementDoc: AngularFirestoreDocument<Requirement>;

  constructor(private afs: AngularFirestore) {
    this.requirementsCollection = this.afs.collection('requirements') //, ref => 
      //ref.orderBy('published', 'desc'))
    
  }
  
  getRequirements() {
    return this.requirementsCollection.snapshotChanges()
    .pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Requirement;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  
  getRequirementData(id: string) {
    this.requirementDoc = this.afs.doc<Requirement>(`requirements/${id}`)
    return this.requirementDoc.valueChanges()
  }
  
  create(data: Requirement) {
    this.requirementsCollection.add(data);
  }
  
  getRequirement(id: string) {
    return this.afs.doc<Requirement>(`requirements/${id}`)
  }
  update(id: string, formData) {
    return this.getRequirement(id).update(formData);
  }
  
  delete(id: string) {
    return this.getRequirement(id).delete();
  }
}
