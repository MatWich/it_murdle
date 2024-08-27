import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccusationDialogComponent } from './accusation-dialog/accusation-dialog.component';
import { DATA } from './data';
import { HeaderComponent } from './header/header.component';
import { LoreComponent } from './lore/lore.component';
import { SuspectInfoComponent } from './suspect-info/suspect-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SuspectInfoComponent, LoreComponent, AccusationDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedCase = 0;
  isMakingAcusation = false;

  get selectedCaseData() {
      return DATA.cases[this.selectedCase];
  }

  onClickMakeAccusation() {
    this.isMakingAcusation = true;
  }

  onCloseMakeAccusation() {
    console.log("hello?")
    this.isMakingAcusation = false;
  }
}
