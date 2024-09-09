import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeductionMapService {
  deductionGridStatus = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0], 
  ]
  constructor() { }

  changeStateOfTile(row: number, col: number) {
    this.deductionGridStatus[row][col] += 1;

    if (this.deductionGridStatus[row][col] >= 4) {
      this.deductionGridStatus[row][col] = 0;
    }
    return this.deductionGridStatus[row][col]
  }

}
