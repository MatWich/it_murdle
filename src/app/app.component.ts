import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccusationDialogComponent } from './accusation-dialog/accusation-dialog.component';
import { DeductionGridComponent } from './deduction-map/deduction-grid/deduction-grid.component';
import { DeductionSuspectComponent } from './deduction-map/deduction-suspect/deduction-suspect.component';
import { HeaderComponent } from './header/header.component';
import { LoreComponent } from './lore/lore.component';
import { MurdleService } from './murdle.service';
import { SuspectInfoComponent } from './suspect-info/suspect-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SuspectInfoComponent, LoreComponent, AccusationDialogComponent, DeductionGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedCase = '1';
  isMakingAcusation = false;
  storyEmote = '📓';
  murdleService: MurdleService = inject(MurdleService);

  get selectedCaseData() {
      return this.murdleService.getMurdleById(this.selectedCase);
  }

  onClickMakeAccusation() {
    this.isMakingAcusation = true;
  }

  onCloseMakeAccusation() {
    this.isMakingAcusation = false;
  }

}
