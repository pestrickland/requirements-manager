import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
export class Requirement {
  id?: string;
  description: string;
  phase?: string;
  type?: string;
  author?: string;
  authorId: string;
  created: Date;
  title?: string;
  definedBy: Array<AngularFirestoreDocument>;
}
