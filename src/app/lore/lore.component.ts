import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lore',
  standalone: true,
  imports: [],
  templateUrl: './lore.component.html',
  styleUrl: './lore.component.css'
})
export class LoreComponent {
  @Input({required: true}) lore!: string;
  @Input({required: true}) emote!: string;
}
