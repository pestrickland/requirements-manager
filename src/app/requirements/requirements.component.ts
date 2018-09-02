import { Component, OnInit } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {
  requirements: Requirement[];
  requirementsList: Observable<any[]>;

  constructor(private requirementService: RequirementService,
              private db: AngularFirestore) { }
  

  ngOnInit() {
    // this.getRequirements();
    this.requirementsList = this.db.collection('requirements').snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          // Get document data.
          const data = a.payload.doc.data() as Requirement;
          // Get document id.
          const id = a.payload.doc.id;
          // Use spread operator to add the id to the document data.
          return {id, ...data};
        });
      }));
  }
  
  myReq: string;
  editMode: boolean = false;
  reqToEdit: any = {};
  
  edit(req) {
    console.log(req);
    //Set reqToEdit and editMode
    this.reqToEdit = req;
    this.editMode = true;
    //Set form value
    this.myReq = req.description;
} //edit

  saveTask() {
    if (this.myReq !== null) {
      //Get the input value
      let req = {
         description: this.myReq
      };
      console.log(this.myReq);
      if (!this.editMode) {
         console.log(req);
         this.requirementService.addFSRequirement(req);
      } else {
         //Get the req id
         let reqId = this.reqToEdit.id;
         console.log(`Old description: ${this.reqToEdit.description}`)
         console.log(`New description: ${req.description}`)
         console.log(`Req ID: ${reqId}`)
         //update the req
         this.requirementService.updateFSRequirement(req, reqId);
      }
      //set edit mode to false and clear form
      this.editMode = false;
      this.myReq = '';
    }
} //saveTask

  deleteRequirement(req) {
    // Get req id.
    let reqId = req.id;
    // Delete the requirement.
    this.requirementService.deleteFSRequirement(reqId);
}

  getRequirements(): void {
    this.requirementService.getRequirements()
        .subscribe(requirements => this.requirements = requirements);
  }

  add(description: string): void {
    description = description.trim();
    if (!description) { return; }
    this.requirementService.addRequirement({ description } as Requirement)
        .subscribe(requirement => {
          this.requirements.push(requirement);
        });
  }

  delete(requirement: Requirement): void {
    this.requirements = this.requirements.filter(r => r !== requirement);
    this.requirementService.deleteRequirement(requirement).subscribe();
  }
}
