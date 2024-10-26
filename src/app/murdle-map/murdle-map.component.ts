import { Component } from '@angular/core';
import { MurdleService } from '../murdle.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-murdle-map',
  standalone: true,
  imports: [],
  templateUrl: './murdle-map.component.html',
  styleUrl: './murdle-map.component.css'
})
export class MurdleMapComponent {


  constructor(private murdleService: MurdleService, private router: Router) {

  }

  get cases() {
    return this.murdleService.allCases;
  }

  selectCase(id: string) {
    this.murdleService.changeActiveMurdle(id);
    this.router.navigate(['case']);
  }

}
