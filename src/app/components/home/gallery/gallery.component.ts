import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface GallerySlide {
  image: string;
  title: string;
  subtitle: string;
}

interface GalleryCategory {
  id: string;
  name: string;
  color: string;
  slides: GallerySlide[];
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit, OnDestroy {
  activeCategory = 'learning';
  currentSlideIndex: { [key: string]: number } = {
    learning: 0,
    playing: 0,
    teaching: 0,
    arts: 0
  };
  private intervalId: ReturnType<typeof setInterval> | null = null;

  categories: GalleryCategory[] = [
    {
      id: 'learning',
      name: 'Learning',
      color: '#1D9E75',
      slides: [
        { image: '/assets/img/gallery/learning1.jpg', title: 'Creative Learning Tools', subtitle: 'Colorful beginnings' },
        { image: '/assets/img/gallery/learning2.jpg', title: 'Story Time & Literacy', subtitle: 'Developing language skills' },
        { image: '/assets/img/gallery/learning3.jpg', title: 'Curiosity Corner', subtitle: 'Exploring the world' },
        { image: '/assets/img/gallery/learning4.jpg', title: 'Arts & Crafts', subtitle: 'Creative expression' }
      ]
    },
    {
      id: 'playing',
      name: 'Playing',
      color: '#D85A30',
      slides: [
        { image: '/assets/img/gallery/playing1.jpg', title: 'Free Play Time', subtitle: 'Imagination at work' },
        { image: '/assets/img/gallery/playing2.jpg', title: 'Outdoor Fun', subtitle: 'Active and healthy' },
        { image: '/assets/img/gallery/playing3.jpg', title: 'Team Games', subtitle: 'Learning together' },
        { image: '/assets/img/gallery/playing4.jpg', title: 'Sensory Play', subtitle: 'Hands-on discovery' }
      ]
    },
    {
      id: 'teaching',
      name: 'Classroom Moments',
      color: '#534AB7',
      slides: [
        { image: '/assets/img/gallery/classmoments1.jpg', title: 'One-on-One Attention', subtitle: 'Personalized care' },
        { image: '/assets/img/gallery/classmoments2.jpg', title: 'Circle Time', subtitle: 'Group learning' },
        { image: '/assets/img/gallery/classmoments3.jpg', title: 'Value-Based Learning', subtitle: 'Character building' },
        { image: '/assets/img/gallery/classmoments4.jpg', title: 'Skill Building', subtitle: 'Growing confident learners' }
      ]
    },
    {
      id: 'arts',
      name: 'Arts & Crafts',
      color: '#E91E63',
      slides: [
        { image: '/assets/img/gallery/arts1.jpg', title: 'Creative Expression', subtitle: 'Unleashing imagination' },
        { image: '/assets/img/gallery/arts2.jpg', title: 'Painting & Drawing', subtitle: 'Colorful creations' },
        { image: '/assets/img/gallery/arts3.jpg', title: 'Craft Projects', subtitle: 'Hands-on creativity' },
        { image: '/assets/img/gallery/arts4.jpg', title: 'Art Exhibitions', subtitle: 'Showcasing talent' }
      ]
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
      this.preloadImages();
    }
  }

  preloadImages(): void {
    // Priority preload: first image of each category
    this.categories.forEach(category => {
      const firstImg = new Image();
      firstImg.src = category.slides[0].image;
    });
    
    // Then preload remaining images
    setTimeout(() => {
      this.categories.forEach(category => {
        category.slides.slice(1).forEach(slide => {
          const img = new Image();
          img.src = slide.image;
        });
      });
    }, 500);
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3500); // Auto-advance every 3.5 seconds
  }

  stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  selectCategory(categoryId: string): void {
    this.activeCategory = categoryId;
    this.stopAutoPlay();
    this.startAutoPlay(); // Restart auto-play for new category
  }

  getActiveCategory(): GalleryCategory {
    return this.categories.find(c => c.id === this.activeCategory) || this.categories[0];
  }

  getCurrentSlide(): GallerySlide {
    const category = this.getActiveCategory();
    return category.slides[this.currentSlideIndex[this.activeCategory]];
  }

  nextSlide(): void {
    const category = this.getActiveCategory();
    this.currentSlideIndex[this.activeCategory] = 
      (this.currentSlideIndex[this.activeCategory] + 1) % category.slides.length;
  }

  prevSlide(): void {
    const category = this.getActiveCategory();
    const currentIndex = this.currentSlideIndex[this.activeCategory];
    this.currentSlideIndex[this.activeCategory] = 
      currentIndex === 0 ? category.slides.length - 1 : currentIndex - 1;
    this.stopAutoPlay();
    this.startAutoPlay(); // Restart timer after manual navigation
  }

  goToSlide(index: number): void {
    this.currentSlideIndex[this.activeCategory] = index;
    this.stopAutoPlay();
    this.startAutoPlay(); // Restart timer after manual navigation
  }

  getCurrentSlideNumber(): number {
    return this.currentSlideIndex[this.activeCategory] + 1;
  }

  getTotalSlides(): number {
    return this.getActiveCategory().slides.length;
  }
}
