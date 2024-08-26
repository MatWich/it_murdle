import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerText: string = 'IT Murdle';
  @Input({required: true}) title!: string


  get pageTitle() {
    return this.title ? this.title : 'Lets start solving mysteries!'
  }
}
