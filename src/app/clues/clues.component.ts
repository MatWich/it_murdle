import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Clue } from './clue.model';

@Component({
  selector: 'app-clues',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule],
  templateUrl: './clues.component.html',
  styleUrl: './clues.component.css'
})
export class CluesComponent {
  @Input({required: true}) clues!: Clue[];
  extendedHintMap: boolean[];
  checkedClues: boolean[];


  toggleDetails(id: number): void {
    this.extendedHintMap[id] = !this.extendedHintMap[id];
  }

  toggleCheckbox(clueId: number): void {
    this.checkedClues[clueId] = !this.checkedClues[clueId];
  }

  ngOnInit() {
    this.extendedHintMap = new Array(this.clues.length).fill(false);
    this.checkedClues = new Array(this.clues.length).fill(false);
  }
}
