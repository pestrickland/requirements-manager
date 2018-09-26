import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { RequirementService } from '../requirement.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-requirements-dashboard',
  templateUrl: './requirements-dashboard.component.html',
  styleUrls: ['./requirements-dashboard.component.scss']
})
export class RequirementsDashboardComponent implements OnInit {
  
  description: string
  type: string
  phase: string
  title: string
  buttonText: string = "Create"
  uploadPercent: Observable<number>
  downloadUrl: Observable<string>
  image: string = null

  constructor(private auth: AuthService, 
              private requirementService: RequirementService, 
              private storage: AngularFireStorage) { }

  ngOnInit() {
  }
  
  createRequirement() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      description: this.description,
      type: this.type,
      phase: this.phase,
      created: new Date,
      title: this.title,
      image: this.image
    };
    this.requirementService.create(data)
    this.title = ''
    this.description = ''
    this.phase = ''
    this.type = ''
    this.buttonText = 'Requirement created'
    setTimeout(() => this.buttonText = 'Create', 2000)
  }
  
  uploadImage(event) {
    const file = event.target.files[0]
    const path = `requirements/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('Only images may be uploaded')
    } else {
      const task = this.storage.upload(path, file)
      const ref = this.storage.ref(path)
      this.uploadPercent = task.percentageChanges()
      task.snapshotChanges().pipe(
        finalize(() => { 
          this.downloadUrl = ref.getDownloadURL()
          this.downloadUrl.subscribe(url => (this.image = url));
        }))
      .subscribe()
    }
  }

}
