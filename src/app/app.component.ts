import { AfterViewInit, Component, ElementRef, ViewChildren } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { RouterOutlet } from '@angular/router';
import { MpNavbarComponent } from './components/mp-navbar/mp-navbar.component';
import { MpHeroAnimComponent } from './components/mp-hero-anim/mp-hero-anim.component';
import { ionLogoGithub, ionLogoLinkedin } from '@ng-icons/ionicons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MpNavbarComponent, MpHeroAnimComponent, NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  viewProviders: [provideIcons({ ionLogoGithub, ionLogoLinkedin })]
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('contentWrapper', { read: ElementRef }) contentWrappers!: ElementRef[];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  }
}
