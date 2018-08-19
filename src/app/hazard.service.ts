import { Injectable } from '@angular/core';
import { Hazard } from './hazard';
import { HAZARDS } from './example-hazards';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HazardService {

  constructor() { }

  getHazards(): Observable<Hazard[]> {
      return of(HAZARDS);
  }
}
