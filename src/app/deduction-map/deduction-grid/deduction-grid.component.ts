import { Component, inject } from '@angular/core';
import { MurdleService } from '../../murdle.service';
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
  murdleService = inject(MurdleService);
  separator = '../../../assets/blackline.png'
  murdleId = '0'

  get rowSuspects() {
    let suspectsInfo: string[] = [this.separator];
    const murdleInfo = this.murdleService.getMurdleById(this.murdleId);


    const suspects = [
      murdleInfo!.suspects[0].image,
      murdleInfo!.suspects[1].image,
      murdleInfo!.suspects[2].image,
    ]

    const places = [
      murdleInfo!.places[0].image,
      murdleInfo!.places[1].image,
      murdleInfo!.places[2].image,
    ]

    suspectsInfo = suspectsInfo.concat(suspects, places);

    return suspectsInfo;
  }

  get columntSuspects() {
    const murdleInfo = this.murdleService.getMurdleById(this.murdleId);

    let weapons = [
      murdleInfo!.weapons[0].image,
      murdleInfo!.weapons[1].image,
      murdleInfo!.weapons[2].image,
    ]

    const places = [
      murdleInfo!.places[0].image,
      murdleInfo!.places[1].image,
      murdleInfo!.places[2].image,
    ]

    weapons = weapons.concat(places);

    return weapons;
  }

}
