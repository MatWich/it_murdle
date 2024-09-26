import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter, ModelFunction, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoreComponent } from '../lore/lore.component';
import { AccusationModel } from './acusationForm.model';
import { ToastrService } from 'ngx-toastr';
import { Suspect } from '../suspect-info/suspect.model';


@Component({
  selector: 'app-accusation-dialog',
  standalone: true,
  imports: [FormsModule, NgFor, LoreComponent],
  templateUrl: './accusation-dialog.component.html',
  styleUrl: './accusation-dialog.component.css'
})
export class AccusationDialogComponent {
  @Input({required: true}) places!: Suspect[];
  @Input({required: true}) weapons!: Suspect[];
  @Input({required: true}) persons!: Suspect[];

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

    // check if answer is correct

    // display corresponding  toast
    this.toastr.success('Hello world!', 'Toastr fun!');

    this.close.emit();
  }

  constructor(private toastr: ToastrService) {
    this.model = new AccusationModel();
   }

   ngOnInit() {
    this.whereOptions = [...this.places.map(place => place.name)]
    this.howOptions = [...this.weapons.map(weapon => weapon.name)]
    this.whoOptions = [...this.persons.map(person => person.name)]
   }
}
