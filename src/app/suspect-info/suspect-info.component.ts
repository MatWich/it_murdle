import { Component, Input } from '@angular/core';
import { type Suspect } from './suspect.model';

@Component({
  selector: 'app-suspect-info',
  standalone: true,
  imports: [],
  templateUrl: './suspect-info.component.html',
  styleUrl: './suspect-info.component.css'
})
export class SuspectInfoComponent {
  @Input({required: true}) weapons!: Suspect[];
  @Input({required: true}) persons!: Suspect[];
  @Input({required: true}) places!: Suspect[];
  
  suspects!: Suspect[] ;
  suspectesCategories: string[] = ['Persons', 'Places', 'Weapons']
  selectedSuspects = '';
  

  switchSuspects(suspectsToDisplay: string) {
    if (suspectsToDisplay === this.selectedSuspects) {
      this.selectedSuspects = ''
    } else {
      this.selectedSuspects = suspectsToDisplay;
    }
    this.switchSuspectsInfo(suspectsToDisplay)
    
  }

  getWeapons() {
    this.suspects = this.weapons;
  }

  getPersons() {
    this.suspects = this.persons
  }

  getPlaces() {
    this.suspects = this.places
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

  getCharacteristics(suspect: any) {
    let characteristic = ''
     for(let i = 0; i < suspect.characteristics.length; i++) {
        characteristic += suspect.characteristics[i] + ' ■ ';
     }
    return characteristic.substring(0, characteristic.length - 2);
  }
}
