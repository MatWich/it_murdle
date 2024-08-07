import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
  inputText: string = '';
  
  @Output() textChanged = new EventEmitter<string>();
  updateHeader() {
    this.textChanged.emit(this.inputText);
  }
}
