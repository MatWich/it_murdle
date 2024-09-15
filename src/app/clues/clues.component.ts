import { NgIf } from '@angular/common';
import { Component, Input, numberAttribute } from '@angular/core';
import { type Clue } from './clue.model';

@Component({
  selector: 'app-clues',
  standalone: true,
  imports: [NgIf],
  templateUrl: './clues.component.html',
  styleUrl: './clues.component.css'
})
export class CluesComponent {
  @Input({required: true}) clues!: Clue[];
  extendedHintMap: boolean[];

  toggleDetails(id: number) {
    this.extendedHintMap[id] = !this.extendedHintMap[id];
  }

  ngOnInit() {
    this.extendedHintMap = new Array(this.clues.length).fill(false);
  }
}
