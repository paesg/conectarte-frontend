import { Component } from '@angular/core';
import { PrincipalCardComponent } from '../../components/principal-card/principal-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PrincipalCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
