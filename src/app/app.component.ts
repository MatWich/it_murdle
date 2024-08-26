import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DATA } from './data';
import { HeaderComponent } from './header/header.component';
import { LoreComponent } from './lore/lore.component';
import { SuspectInfoComponent } from './suspect-info/suspect-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SuspectInfoComponent, LoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedCase = 0;

  get selectedCaseData() {
      return DATA.cases[this.selectedCase];
  }
}
