import { Component, inject } from '@angular/core';
import { MurdleService } from '../murdle.service';

@Component({
  selector: 'app-murdle-map',
  standalone: true,
  imports: [],
  templateUrl: './murdle-map.component.html',
  styleUrl: './murdle-map.component.css'
})
export class MurdleMapComponent {


  constructor(private murdleService: MurdleService) {

  }

  get cases() {
    return this.murdleService.allCases;
  }

  selectCase(id: string) {
    this.murdleService.changeActiveMurdle(id);
  }

}
