import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

type Action = 'type' | 'clear';

@Component({
  selector: 'mp-hero-anim',
  templateUrl: './mp-hero-anim.component.html',
  styleUrls: ['./mp-hero-anim.component.css'],
  standalone: true,
})
export class MpHeroAnimComponent implements AfterViewInit {
  texts: string[] = [
    'Mike Ponton',
    'a Tech Addict',
    'a creative mind',
    'a Software Developer',
    'a Gemedevelopment Enthusiast',
  ];
  currentTextIndex: number = 0;
  currentCharIndex: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.animateText();
  }

  animateText() {
    let textElement = this.el.nativeElement.querySelector(
      '.hero-text'
    ) as HTMLElement; // Select the text element

    if (textElement) {
      this.typeText(
        textElement,
        this.texts[this.currentTextIndex],
        'type',
        () => {
          setTimeout(() => {
            this.typeText(textElement, '', 'clear', () => {
              this.currentTextIndex =
                (this.currentTextIndex + 1) % this.texts.length;
              this.animateText();
            });
          }, 5000);
        }
      );
    }
  }

  typeText(
    element: HTMLElement,
    text: string,
    action: Action,
    callback: () => void
  ) {
    let cursorElement = document.querySelector('#cursor');
    if (element.textContent !== null) {
      if (action === 'type') {
        if (this.currentCharIndex < text.length) {
          element.textContent += text[this.currentCharIndex];
          if (cursorElement) cursorElement.classList.add('blinking-cursor');
          this.currentCharIndex++;
          setTimeout(() => this.typeText(element, text, action, callback), 100);
        } else {
          this.currentCharIndex = 0;
          callback();
        }
      } else if (action === 'clear') {
        let currentText = element.textContent;
        if (currentText && currentText.length > 1) {
          element.textContent = currentText.slice(0, -1);
          if (cursorElement) cursorElement.classList.add('blinking-cursor');
          setTimeout(() => this.typeText(element, text, action, callback), 100);
        } else {
          element.textContent = '';
          callback();
        }
      }
    }
  }
}
