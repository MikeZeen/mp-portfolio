import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'mp-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mp-card.component.html',
  styleUrl: './mp-card.component.css'
})
export class MpCardComponent {

  @Input() content: { title: string, date: string, place: string, description: string } = { title: 'Placeholder', date: '20xx - 20xx', place: 'Somewhere', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla' }
}
