import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent implements OnInit, OnDestroy {
  carouselImages = [
    { src: '/assets/img/color_pencils.jpg', alt: 'Happy Learning Environment' },
    { src: '/assets/img/creative.jpg', alt: 'Creative Activities' },
    { src: '/assets/img/Gloria.jpg', alt: 'Arts and Crafts' },
    { src: '/assets/img/Noah2.jpg', alt: 'Play-based Learning' },
    { src: '/assets/img/friends.jpg', alt: 'Individual Attention' },
    { src: '/assets/img/painting.jpg', alt: 'Educational Materials' },
  ];

  currentImageIndex = 0;
  isFading = false;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  private observer: IntersectionObserver | null = null;
  
  cardsVisible: boolean[] = [false, false, false, false, false, false];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => this.nextImage(), 3500);
      this.setupScrollAnimation();
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupScrollAnimation(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered animation
            this.cardsVisible.forEach((_, index) => {
              setTimeout(() => {
                this.cardsVisible[index] = true;
              }, index * 100); // 100ms delay between each card
            });
            // Disconnect after animation triggers once
            if (this.observer) {
              this.observer.disconnect();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe the feature cards container
    setTimeout(() => {
      const cardsContainer = document.querySelector('.feature-cards-container');
      if (cardsContainer && this.observer) {
        this.observer.observe(cardsContainer);
      }
    }, 100);
  }

  private nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
  }
}
