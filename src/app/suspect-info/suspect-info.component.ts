import { Component } from '@angular/core';

@Component({
  selector: 'app-suspect-info',
  standalone: true,
  imports: [],
  templateUrl: './suspect-info.component.html',
  styleUrl: './suspect-info.component.css'
})
export class SuspectInfoComponent {
  imageUrl: string = "../../assets/256.png"
  suspectName: string = "Cambridge Jenkins";
  suspectInfo: string = "Likes to build stuff but for some unknown reasons throws big stack trace."
}
