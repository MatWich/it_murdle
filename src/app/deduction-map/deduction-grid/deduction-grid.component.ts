import { Component, Inject, inject, Input } from '@angular/core';
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
  @Input({required: true}) murdle!: any;

  separator = '../../../assets/blackline.png'
  murdleId = '0'

  get rowSuspects() {
    let suspectsInfo: string[] = [this.separator];

    const suspects = [
      this.murdle!.suspects[0].image,
      this.murdle!.suspects[1].image,
      this.murdle!.suspects[2].image,
    ]

    const places = [
      this.murdle!.places[0].image,
      this.murdle!.places[1].image,
      this.murdle!.places[2].image,
    ]

    suspectsInfo = suspectsInfo.concat(suspects, places);

    return suspectsInfo;
  }

  get columntSuspects() {
    let weapons = [
      this.murdle!.weapons[0].image,
      this.murdle!.weapons[1].image,
      this.murdle!.weapons[2].image,
    ]

    const places = [
      this.murdle!.places[0].image,
      this.murdle!.places[1].image,
      this.murdle!.places[2].image,
    ]

    weapons = weapons.concat(places);

    return weapons;
  }

}
