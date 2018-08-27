import { Injectable } from '@angular/core';
import { Requirement } from './requirement';
import { REQUIREMENTS } from './example-requirements';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


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
      .pipe(
        tap(requirements => this.log('Fetched requirements')),
        catchError(this.handleError('getRequirements', []))
      );
  }

  // GET requirement by id. Will 404 if id not found.
  getRequirement(id: number): Observable<Requirement> {
    const url = `${this.requirementsUrl}/${id}`;
    return this.http.get<Requirement>(url).pipe(
      tap(_ => this.log(`Fetched Requirement id=${id}`)),
      catchError(this.handleError<Requirement>(`getRequirement id=${id}`))
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
