import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement-search',
  templateUrl: './requirement-search.component.html',
  styleUrls: ['./requirement-search.component.scss']
})
export class RequirementSearchComponent implements OnInit {
  requirements$: Observable<Requirement[]>;
  private searchTerms = new Subject<string>();

  constructor(private requirementService: RequirementService) { }

  // Push a search term into the observable stream.
  search(term: string): void{
      this.searchTerms.next(term);
  }

  ngOnInit(): void {
      this.requirements$ = this.searchTerms.pipe(
        // Wait 300ms after each keystroke before considering the term.
        debounceTime(300),

        // Ignore new term if same as previous term.
        distinctUntilChanged(),

        // Switch to new search observable each time the term changes.
        switchMap((term: string) => this.requirementService.searchRequirements(term)),
        );
  }

}
