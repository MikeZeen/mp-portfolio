import { NgFor } from '@angular/common';
import { Component, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'mp-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mp-navbar.component.html',
  styleUrl: './mp-navbar.component.css'
})

export class MpNavbarComponent {
  selectedItem: string = '';
  sections: HTMLElement[] = [];

  @Input() menuItems: { label: string, link: string }[] = [];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.sections = this.el.nativeElement.parentElement.querySelectorAll('section');
    this.checkSectionVisibility();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkSectionVisibility();
  }

  private checkSectionVisibility() {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const visibilityThreshold = 0.8; 

      const sectionInView = (
        (scrollPosition + windowHeight >= sectionTop + sectionHeight * visibilityThreshold) &&
        (scrollPosition <= sectionBottom - sectionHeight * visibilityThreshold)
      );

      if (sectionInView) {
        this.selectedItem = section.id;
      }
    });
  }

  scrollTo(link: string) {
    this.selectedItem = link;
    document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
  }
}