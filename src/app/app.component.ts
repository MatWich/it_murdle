import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DATA } from './data';
import { HeaderComponent } from './header/header.component';
import { SuspectInfoComponent } from './suspect-info/suspect-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SuspectInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  headerText: string = "Change me!!!"
  selectedCase = 0;

  onTextChanged(newText: string) {
    this.headerText = newText;
  }

  get selectedCaseData() {
      return DATA.cases[this.selectedCase];
  }
}
