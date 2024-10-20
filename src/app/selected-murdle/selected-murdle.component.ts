import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccusationDialogComponent } from '../accusation-dialog/accusation-dialog.component';
import { AdditionalHintComponent } from '../additional-hint/additional-hint.component';
import { CluesComponent } from '../clues/clues.component';
import { DeductionGridComponent } from '../deduction-map/deduction-grid/deduction-grid.component';
import { HeaderComponent } from '../header/header.component';
import { LoreComponent } from '../lore/lore.component';
import { MurdleService } from '../murdle.service';
import { SuspectInfoComponent } from '../suspect-info/suspect-info.component';

@Component({
  selector: 'app-selected-murdle',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SuspectInfoComponent, LoreComponent, AccusationDialogComponent, DeductionGridComponent, CluesComponent, AdditionalHintComponent],
  templateUrl: './selected-murdle.component.html',
  styleUrl: './selected-murdle.component.css'
})
export class SelectedMurdleComponent {
  isMakingAcusation = false;
  storyEmote = '📓';
  murdleService: MurdleService = inject(MurdleService);
  private murdleCase;


  constructor() {
    this.murdleCase = this.murdleService.getCurrentMurdle()
  }

  get selectedCaseData() {
      return this.murdleCase
  }

  onClickMakeAccusation() {
    this.isMakingAcusation = true;
  }

  onCloseMakeAccusation() {
    this.isMakingAcusation = false;
  }

  get places() {
    return this.murdleCase!.places;
  }

  get persons() {
    return this.murdleCase!.suspects;
  }

  get weapons() {
    return this.murdleCase!.weapons
  }

  get additionHint() {
    return this.murdleCase!.additionalHint
  }
}
