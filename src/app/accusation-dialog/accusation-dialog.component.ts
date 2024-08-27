import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type AccusationModel } from './acusationForm.model';

@Component({
  selector: 'app-accusation-dialog',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './accusation-dialog.component.html',
  styleUrl: './accusation-dialog.component.css'
})
export class AccusationDialogComponent {

  @Output() close = new EventEmitter();
  selectedWhere: string = '';
  selectedWho: string = '';
  selectedHow: string = '';

  whereOptions = ['Here', 'There', 'Anywhere'];
  howOptions = ['Option1', 'Option2', 'Option3'];
  whoOptions = ['Option1', 'Option2', 'Option3'];

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    // TODO: Some walidation and maybe toast if correct or wrong? Do it by service
    console.log("Are you sure?");
    this.close.emit();
  }
}
