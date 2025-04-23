import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChildren,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { RouterOutlet } from '@angular/router';
import { MpNavbarComponent } from './components/mp-navbar/mp-navbar.component';
import { MpHeroAnimComponent } from './components/mp-hero-anim/mp-hero-anim.component';
import { MpCardComponent } from './components/mp-card/mp-card.component';
import {
  ionLogoGithub,
  ionLogoLinkedin,
  ionLogoSass,
} from '@ng-icons/ionicons';
import { iconoirVueJs, iconoirMail } from '@ng-icons/iconoir';
import {
  simpleDotnet,
  simpleGithub,
  simpleTypescript,
  simpleMysql,
  simpleVisualstudiocode,
  simpleAngular,
  simpleBootstrap,
  simpleReact,
  simpleJavascript,
  simpleTailwindcss,
  simpleAzuredevops,
  simpleNodedotjs,
  simpleUnrealengine,
  simpleBlender,
  simpleAdobephotoshop,
  simpleAutodesk,
  simpleVuedotjs,
  simpleSass,
  simplePython,
} from '@ng-icons/simple-icons';
import { bootstrapArrowBarDown } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MpNavbarComponent,
    MpHeroAnimComponent,
    MpCardComponent,
    NgIconComponent,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  viewProviders: [
    provideIcons({
      ionLogoGithub,
      ionLogoLinkedin,
      simpleVuedotjs,
      ionLogoSass,
      simpleDotnet,
      simpleGithub,
      simpleTypescript,
      simpleMysql,
      simpleVisualstudiocode,
      simpleAngular,
      simpleBootstrap,
      simpleReact,
      simpleJavascript,
      simpleTailwindcss,
      simpleAzuredevops,
      simpleNodedotjs,
      simpleUnrealengine,
      simpleBlender,
      simpleAdobephotoshop,
      simpleAutodesk,
      iconoirMail,
      simpleSass,
      simplePython,
      bootstrapArrowBarDown,
    }),
  ],
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('contentWrapper', { read: ElementRef })
  contentWrappers!: ElementRef[];
  cards = [
    {
      title: 'Software Developer',
      date: 'Oct 2024 - Present',
      place: 'flaschenpost SE',
      description:
        'Working in a team to provide the best possible user journey for our customers. \n I am responsible for the development of customer facing features both in the frontend and backend.',
    },
    {
      title: 'Unreal Engine Developer',
      date: 'Oct 2020 - Oct 2024',
      place: 'realworld one',
      description:
        'Collaborating with a team of 3D Artists and developers to provide interesting \n VR Trainings and Showrooms to a variety of clients from the life science sector',
    },
    {
      title: '3D Artist',
      date: 'Feb 2019 - June 2020',
      place: 'crossacitve gmbh',
      description:
        'I developed the render Pipeline for 3D Product Visualizations. \n Furthermore I created said renderings for multiple beauty brands to \n populate their Amazon Product pages.',
    },
    {
      title: 'Game Art Tutor',
      date: 'Mai 2018 - Jan 2019',
      place: 'SAE Institute Cologne',
      description:
        'I was responsible for teaching the students the basics of \n 3D modeling and Unreal Engine. I also supervised their projects \n which they had to submit.',
    },
    {
      title: 'B.A. Game Art & Animation',
      date: '2016 - 2018',
      place: 'Middlesex University',
      description:
        'Studies that mainly focused on the Game Art Pipeline, where I specialised in the \n in the more technical aspects like Rigging, Scripting and Prototyping',
    },
  ];

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
