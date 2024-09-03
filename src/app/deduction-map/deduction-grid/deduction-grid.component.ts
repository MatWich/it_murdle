import { Component } from '@angular/core';
import { DeductionSuspectComponent } from '../deduction-suspect/deduction-suspect.component';
import { DeductionTileComponent } from '../deduction-tile/deduction-tile.component';

@Component({
  selector: 'app-deduction-grid',
  standalone: true,
  imports: [DeductionTileComponent, DeductionSuspectComponent],
  templateUrl: './deduction-grid.component.html',
  styleUrl: './deduction-grid.component.css'
})
export class DeductionGridComponent {

}
