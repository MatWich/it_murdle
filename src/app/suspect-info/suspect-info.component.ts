import { Component, inject, Input } from '@angular/core';
import { MurdleService } from '../murdle.service';
import { type Suspect } from './suspect.model';

@Component({
  selector: 'app-suspect-info',
  standalone: true,
  imports: [],
  templateUrl: './suspect-info.component.html',
  styleUrl: './suspect-info.component.css'
})
export class SuspectInfoComponent {
  murdleService = inject(MurdleService);
  suspectesCategories: string[] = ['Persons', 'Places', 'Weapons']
  selectedSuspects = '';
  suspects!: Suspect[] ;

  switchSuspects(suspectsToDisplay: string) {
    if (suspectsToDisplay === this.selectedSuspects) {
      this.selectedSuspects = ''
    } else {
      this.selectedSuspects = suspectsToDisplay;
    }
    this.switchSuspectsInfo(suspectsToDisplay)
    
  }

  getWeapons() {
    this.suspects = this.murdleService.getMurdleById('0')!.weapons;
  }

  getPersons() {
    this.suspects = this.murdleService.getMurdleById('0')!.suspects;
  }

  getPlaces() {
    this.suspects = this.murdleService.getMurdleById('0')!.places;
  }

  switchSuspectsInfo(suspectsToDisplay: string) {
    switch(suspectsToDisplay) {
      case this.suspectesCategories[0]:
        this.getPersons()
        break;
      case this.suspectesCategories[1]:
        this.getPlaces()
        break;
      case this.suspectesCategories[2]:
        this.getWeapons()
        break;
      default:
        // nothing to do
    }
  }
}
