import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-deduction-tile',
  standalone: true,
  imports: [NgIf],
  templateUrl: './deduction-tile.component.html',
  styleUrl: './deduction-tile.component.css'
})
export class DeductionTileComponent {
  showImage = true; // Flaga do kontrolowania, czy obrazek jest wyświetlany
  images = ['', '../../../assets/cross.png', '../../../assets/tick.png', '../../../assets/question.png']
  currentImage = 0

  toggleImage() {
    this.currentImage += 1;
    if (this.currentImage >= this.images.length) {
      this.currentImage = 0;
    }
  }

  get shouldDisplayImg() {
    return this.images[this.currentImage] !== '';
  }
  
  get imageToDisplay() {
    return this.images[this.currentImage];
  }
}
