import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SuspectInfoComponent } from './suspect-info/suspect-info.component';
import { TextInputComponent } from './text-input/text-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TextInputComponent, SuspectInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  headerText: string = "Change me!!!"

  onTextChanged(newText: string) {
    this.headerText = newText;
  }
}
