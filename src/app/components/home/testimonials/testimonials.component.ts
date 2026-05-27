import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      name: 'Mrs.VIDHYA',
      relation: 'Parent',
      photo: '/assets/img/parent-placeholder.png',
      rating: 5,
      paragraphs: [
        'My son has made noticeable progress in communication & English pronunciation.',
        'I appreciate that the school takes an innovative learning approach. Happy to say that they identified his interest in music. The school has helped him become more disciplined & attentive to instructions.',
        'I like the manner in which the teachers at David & Mary Academy Pre-School instill values & strong morals in him in this phase of development.'
      ]
    },
    {
      id: 2,
      name: 'Mrs.SANGAMI',
      relation: 'Parent',
      photo: '/assets/img/parent-placeholder.png',
      rating: 5,
      paragraphs: [
        'I find this Pre-School to be an excellent start for young learners. The teachers are supportive and give each child thoughtful care. My child enjoys her time there.',
        'Here, they engage children in activities that build their motor skills & support healthy thinking, guide children in conversational communication, good manners & positive behavior. Our experience with David & Mary Academy Pre-School has been satisfying!'
      ]
    },
    {
      id: 3,
      name: 'Mr. Nagraj & Mrs. Sharal',
      relation: 'Parent',
      photo: '/assets/img/parent-placeholder.png',
      rating: 5,
      paragraphs: [
        'We had a wonderful experience with this school. My kids studied in Playgroup and Junior KG last year, and we are very happy with their growth. The teachers were caring, supportive, and made learning fun for the children.',
        'We could clearly see improvement in their communication skills, confidence, and participation in different activities. The school also encouraged creativity, discipline, and social interaction in a very positive way.',
        'Thank you to all the teachers and staff for creating such a safe and happy learning environment for the kids. Highly recommended for early childhood education!'
      ]
    }
  ];
}
