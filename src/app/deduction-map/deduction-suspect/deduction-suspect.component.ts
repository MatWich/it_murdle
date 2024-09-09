import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deduction-suspect',
  standalone: true,
  imports: [],
  templateUrl: './deduction-suspect.component.html',
  styleUrl: './deduction-suspect.component.css'
})
export class DeductionSuspectComponent {
  @Input() src: string = 'Some Image';
}
