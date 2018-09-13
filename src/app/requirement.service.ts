import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Requirement } from './requirement';
import { MessageService } from './message.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

const httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  requirementsList: AngularFirestoreCollection<Requirement>;
  private requirementDoc: AngularFirestoreDocument<Requirement>;
  private requirementsUrl = 'api/requirements';  // URL to web API.

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private db: AngularFirestore) {

      this.requirementsList = this.db.collection('requirements');

    }

  getRequirements(): Observable<Requirement[]> {
    return this.requirementsList.valueChanges()
      .pipe(
        tap(requirements => this.log('Fetched requirements from Firestore.')),
        catchError(this.handleError('getRequirements', []))
      );
  }

  addFSRequirement(requirement: Requirement): Promise<any> {
    const id = this.db.createId();
    const description = requirement.description;
    const req: Requirement = { id, description };
    return this.requirementsList.doc(id).set(req)
    .then(
        _ => this.log(`Added requirement "${req.description}" with id=${req.id}`),
        catchError(this.handleError<any>('addRequirement'))
        );
  }
  
  // addFSRequirement2(requirement: Requirement) {
  //   this.requirementsList.snapshotChanges()
  //     .pipe(
  //       map(actions => actions.map( a => {
  //         const data = a.payload.doc.data() as Requirement;
  //         const id = a.payload.doc.id;
  //         return { id, ...data };
  //       })))
  // }

  updateFSRequirement(update, id) {
    console.log(`Text to send: ${update}`);
    console.log(`Id: ${id}`);
    this.requirementDoc = this.db.doc<Requirement>(`requirements/${id}`);
    this.requirementDoc.update(update);
  }

  deleteFSRequirement(id) {
    this.requirementDoc = this.db.doc<Requirement>(`requirements/${id}`);
    this.requirementDoc.delete();
  }

  // GET requirement by id. Will 404 if id not found.
  getRequirement(id: string): Observable<Requirement> {
    const url = `${this.requirementsUrl}/${id}`;
    return this.http.get<Requirement>(url).pipe(
      tap(_ => this.log(`Fetched Requirement id=${id}`)),
      catchError(this.handleError<Requirement>(`getRequirement id=${id}`))
      );
  }

  // PUT: Update the requirement on the server.
  updateRequirement(requirement: Requirement): Observable<any> {
    return this.http.put(this.requirementsUrl, requirement, httpOptions)
      .pipe(
        tap(_ => this.log(`Updated requirement id=${requirement.id}`)),
        catchError(this.handleError<any>('updateRequirement'))
        );
  }

  // POST: Add a new requirement to the server.
  addRequirement(requirement: Requirement): Observable<Requirement> {
    return this.http.post<Requirement>(this.requirementsUrl, requirement, httpOptions)
      .pipe(
        tap((requirement: Requirement) => this.log(`Added requirement with id=${requirement.id}`)),
        catchError(this.handleError<Requirement>('addRequirement'))
        );
  }

  // DELETE: Delete the requirement from the server.
  deleteRequirement(requirement: Requirement | number): Observable<Requirement> {
    const id = typeof requirement === 'number' ? requirement : requirement.id;
    const url = `${this.requirementsUrl}/${id}`;

    return this.http.delete<Requirement>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`Deleted requirement id=${id}`)),
        catchError(this.handleError<Requirement>('deleteRequirement'))
        );
  }

  // GET requirements whose name contains search term.
  searchRequirements(term: string): Observable<Requirement[]> {
    if (!term.trim()) {
      // If no search term, return empty array.
      return of([]);
    }
    return this.http.get<Requirement[]>(`${this.requirementsUrl}/?description=${term}`)
      .pipe(
        tap(_ => this.log(`Found requirements matching "${term}"`)),
        catchError(this.handleError<Requirement[]>('searchRequirements', []))
        );
  }

  private log(message: string) {
    this.messageService.add(`RequirementService: ${message}`);
  }

  // Handle Http operation that failed.
  // Let the app continue.
  // @param operation - name of the operation that failed
  // @param result - optional value to return as the observable result
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);  // Let the app keep running by returning an empty result.
    };
  }
}
