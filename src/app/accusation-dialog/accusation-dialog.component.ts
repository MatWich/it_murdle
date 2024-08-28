import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter, ModelFunction } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoreComponent } from '../lore/lore.component';
import { AccusationModel } from './acusationForm.model';

@Component({
  selector: 'app-accusation-dialog',
  standalone: true,
  imports: [FormsModule, NgFor, LoreComponent],
  templateUrl: './accusation-dialog.component.html',
  styleUrl: './accusation-dialog.component.css'
})
export class AccusationDialogComponent {

  @Output() close = new EventEmitter();
  model: AccusationModel;
  selectedWhere: string = '--Select--';
  selectedWho: string = '--Select--';
  selectedHow: string = '--Select--';

  whereOptions = ['Here', 'There', 'Anywhere'];
  howOptions = ['Option1', 'Option2', 'Option3'];
  whoOptions = ['Option1', 'Option2', 'Option3'];

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    // TODO: Toast if correct or wrong? Do it by service
    if(this.model.areAllFilled()) {
      console.log("all good go on");
    } else {
      console.log("Cmon fill all the fields");
    }
    this.close.emit();
  }

  constructor() {
    this.model = new AccusationModel();
   }
}
