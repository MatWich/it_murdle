import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { threadId } from 'worker_threads';
import { DeductionMapService } from '../deduction-map.service';

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
  @Input({required: true}) row!: number
  @Input({required: true}) col! : number
  deductionMapService = inject(DeductionMapService);

  toggleImage() {
    this.currentImage = this.deductionMapService.changeStateOfTile(this.row, this.col)
    
  }

  get shouldDisplayImg() {
    return this.images[this.currentImage] !== '';
  }
  
  get imageToDisplay() {
    return this.images[this.currentImage];
  }
}
