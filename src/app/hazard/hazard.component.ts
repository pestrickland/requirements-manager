import { Component, OnInit } from '@angular/core';
import { Hazard } from '../hazard';
import { HazardService } from '../hazard.service';

@Component({
  selector: 'app-hazard',
  templateUrl: './hazard.component.html',
  styleUrls: ['./hazard.component.css']
})
export class HazardComponent implements OnInit {

  constructor(private hazardService: HazardService) { }

  ngOnInit() {
    this.getHazards();
  }

  hazards: Hazard[];
  selectedHazard: Hazard;

  onSelect(hazard: Hazard): void {
      this.selectedHazard = hazard;
  }

  getHazards(): void {
    this.hazardService.getHazards()
    .subscribe(hazards => this.hazards = hazards);
  }
}
