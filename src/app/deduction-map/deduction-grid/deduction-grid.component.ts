import { Component } from '@angular/core';
import { DeductionTileComponent } from '../deduction-tile/deduction-tile.component';

@Component({
  selector: 'app-deduction-grid',
  standalone: true,
  imports: [DeductionTileComponent],
  templateUrl: './deduction-grid.component.html',
  styleUrl: './deduction-grid.component.css'
})
export class DeductionGridComponent {

}
