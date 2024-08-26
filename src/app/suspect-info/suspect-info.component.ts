import { Component, Input } from '@angular/core';
import { type Suspect } from './suspect.model';

@Component({
  selector: 'app-suspect-info',
  standalone: true,
  imports: [],
  templateUrl: './suspect-info.component.html',
  styleUrl: './suspect-info.component.css'
})
export class SuspectInfoComponent {
  @Input({required: true}) suspects!: Suspect[] ;
  @Input({required: true}) header!: string;}
