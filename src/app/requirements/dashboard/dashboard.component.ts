import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projectsCollection: AngularFirestoreCollection<any>;
  projects$: Observable<any>;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService) {
    // Get list of projects associated with user.
    this.projectsCollection = this.afs.collection('projects');
  }

  ngOnInit() {
    this.projects$ = this.getProjects();
    console.log(this.projects$)
  }

  getProjects() {
    return this.projectsCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
  }
}
