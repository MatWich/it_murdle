import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MurdleService } from './murdle.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  murdleCase
  murdleId = '1'
  constructor(private murdleService: MurdleService) {
    this.murdleCase = this.murdleService.getMurdleById(this.murdleId);
  }

  get title() {
    return this.murdleCase.title
  }
}
