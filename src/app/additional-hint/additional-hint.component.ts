import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-additional-hint',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './additional-hint.component.html',
  styleUrl: './additional-hint.component.css'
})
export class AdditionalHintComponent {
  @Input({required: true}) hint: string
  hintVisible: boolean = false


  showHint() {
    this.hintVisible = true
  }
}
