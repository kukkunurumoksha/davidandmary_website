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
    { src: '/assets/img/teaching.png', alt: 'Experienced & Caring Professionals' },
    { src: '/assets/img/learning.png', alt: 'Child-centered Approach' },
    { src: '/assets/img/curriculum.jpg', alt: 'Age-Appropriate Curriculum' },
    { src: '/assets/img/play-group.png', alt: 'Play-based Learning' },
    { src: '/assets/img/unique-learning.png', alt: 'Safe Learning Environment' },
  ];

  currentImageIndex = 0;
  isFading = false;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => this.nextImage(), 3500);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private nextImage(): void {
    this.isFading = true;
    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
      this.isFading = false;
    }, 400);
  }
}
