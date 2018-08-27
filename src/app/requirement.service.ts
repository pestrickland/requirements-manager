import { Injectable } from '@angular/core';
import { Requirement } from './requirement';
import { REQUIREMENTS } from './example-requirements';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  // private itemDoc: AngularFirestoreDocument<Item>;
  // items: Observable<any[]>;

  // constructor(private db: AngularFirestore) {
    // this.items = db.collection('requirements').valueChanges();
    // this.itemDoc = db.doc<Item>('requirements/1');
  // }
  private requirementsUrl = 'api/requirements';  // URL to web API.

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  getRequirements(): Observable<Requirement[]> {
    this.messageService.add('Requirements fetched.');
    // return of(REQUIREMENTS);
    return this.http.get<Requirement[]>(this.requirementsUrl)
  }

  getRequirement(id: number): Observable<Requirement> {
    this.messageService.add(`Requirement Service fetched id=${id}`);
    return of(REQUIREMENTS.find(requirement => requirement.id === id));
  }

  private log(message: string) {
    this.messageService.add(`RequirementService: ${message}`);
  }
}
