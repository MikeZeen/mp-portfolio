import { NgFor } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'mp-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mp-navbar.component.html',
  styleUrl: './mp-navbar.component.css'
})

export class MpNavbarComponent {
  selectedItem: string = '';

  @Input() menuItems: {label: string, link: string}[] = [];

  scrollTo(link: string) {
  this.selectedItem = link;
  document.getElementById(link)?.scrollIntoView({behavior: "smooth"});
}
}
