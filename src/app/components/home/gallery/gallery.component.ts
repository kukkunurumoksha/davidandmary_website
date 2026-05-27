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
    arts: 0,
    events: 0
  };
  private intervalId: ReturnType<typeof setInterval> | null = null;

  categories: GalleryCategory[] = [
    {
      id: 'learning',
      name: 'Learning',
      color: '#1D9E75',
      slides: [
        { image: '/assets/img/gallery/learn3.jpg', title: 'Interactive Learning', subtitle: 'Hands-on activities that inspire young minds' },
        { image: '/assets/img/gallery/learn1.jpg', title: 'Early Writing Skills', subtitle: 'Kids learning to write with confidence.' },
        { image: '/assets/img/gallery/learning3.jpg', title: 'Creative Learning', subtitle: 'Little minds learning with joy.' },
        { image: '/assets/img/gallery/learn2.jpg', title: 'Focused Learning', subtitle: 'Building skills step by step.' }
      ]
    },
    {
      id: 'playing',
      name: 'Playing',
      color: '#D85A30',
      slides: [
        { image: '/assets/img/gallery/play5.jpg', title: 'Fun & Play', subtitle: 'Learning through playful moments' },
        { image: '/assets/img/gallery/play2.jpg', title: 'Playful Learning', subtitle: 'Learning while having fun.' },
        { image: '/assets/img/gallery/play7.jpg', title: 'Learning Through Play', subtitle: 'Fun games that build young minds.' },
        { image: '/assets/img/gallery/playing4.jpg', title: 'Happy Play Time', subtitle: 'Enjoying every playful moment.' }
      ]
    },
    {
      id: 'teaching',
      name: 'Classroom Moments',
      color: '#534AB7',
      slides: [
        { image: '/assets/img/gallery/cm1.jpg', title: 'Proud Classroom Moments', subtitle: 'Celebrating achievements with smiles' },
        { image: '/assets/img/gallery/cm5.jpg', title: 'Joyful Classroom Activities', subtitle: 'Learning through fun and interaction' },
        { image: '/assets/img/gallery/cm3.jpg', title: 'A Day of Learning Begins', subtitle: 'Stepping into fun and discovery' },
        { image: '/assets/img/gallery/cm4.jpg', title: 'A Calm Start to Learning', subtitle: 'Nurturing young minds with care' }
      ]
    },
    {
      id: 'arts',
      name: 'Arts & Crafts',
      color: '#E91E63',
      slides: [
        { image: '/assets/img/gallery/arts1.jpg', title: 'Creative Expression', subtitle: 'Exploring creativity through art and craft.' },
        { image: '/assets/img/gallery/craft1.jpg', title: 'Painting & Drawing', subtitle: 'Creativity grows with every color.' },
        { image: '/assets/img/gallery/arts4.jpg', title: 'Creative Craft Time', subtitle: 'Little hands creating colorful ideas.' },
        { image: '/assets/img/gallery/arts5.jpg', title: 'Paper Craft Fun', subtitle: 'Turning simple paper into creativity.' }
      ]
    },
    {
      id: 'events',
      name: 'Events',
      color: '#3d1212dc',
      slides: [
        { image: '/assets/img/gallery/christmas3.jpg', title: 'Christmas Celebration', subtitle: 'Fun-filled Christmas celebrations' },
        { image: '/assets/img/gallery/christmas4.jpg', title: 'Christmas Dance Moments', subtitle: 'Tiny steps, big celebrations' },
        { image: '/assets/img/gallery/christmas5.jpg', title: 'Christmas Cheer', subtitle: 'Moments filled with cheer and fun' },
        { image: '/assets/img/gallery/pocso1.jpg', title: 'POSCO Visit', subtitle: 'A warm welcome and meaningful interaction' },
        { image: '/assets/img/gallery/pocso2.jpg', title: 'POSCO Interaction Session', subtitle: 'Engaging conversations and shared learning' },
        { image: '/assets/img/gallery/pocso3.jpg', title: 'POSCO Event Highlights', subtitle: 'Together towards meaningful learning experiences' }
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
