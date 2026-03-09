import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-programs',
  imports: [CommonModule],
  templateUrl: './our-programs.component.html',
  styleUrl: './our-programs.component.css'
})
export class OurProgramsComponent {
  selectedProgram = 0;

  programs = [
    {
      id: 0,
      name: 'Play Group',
      age: '2.5 - 3 years',
      description: 'Our Play Group program creates a nurturing environment where toddlers begin their educational journey through play-based learning.',
      features: [
        'Sensory exploration and discovery',
        'Language development through stories and songs',
        'Fine and gross motor skill development',
        'Social skills and emotional development'
      ],
      image: '/assets/img/play-group.png'
    },
    {
      id: 1,
      name: 'Pre KG',
      age: '3 - 4 years',
      description: 'Pre-Kindergarten focuses on building foundational skills through structured play and learning activities.',
      features: [
        'Pre-reading and pre-writing skills',
        'Number recognition and basic counting',
        'Creative expression through art and music',
        'Building independence and confidence'
      ],
      image: '/assets/img/childhood-bliss.png'
    },
    {
      id: 2,
      name: 'Junior KG',
      age: '4 - 5 years',
      description: 'Junior Kindergarten prepares children for formal schooling with enhanced learning experiences.',
      features: [
        'Phonics and early reading skills',
        'Mathematical concepts and problem-solving',
        'Scientific exploration and discovery',
        'Team activities and collaborative learning'
      ],
      image: '/assets/img/jeremy1.png'
    },
    {
      id: 3,
      name: 'Senior KG',
      age: '5 - 6 years',
      description: 'Senior Kindergarten provides comprehensive preparation for primary school success.',
      features: [
        'Advanced literacy and numeracy skills',
        'Critical thinking and reasoning',
        'Project-based learning experiences',
        'Leadership and responsibility development'
      ],
      image: '/assets/img/shresta1.png'
    },
    {
      id: 4,
      name: 'After-School Care',
      age: '2.5 - 8 years',
      description: 'Extended care for working parents! Our after-school program provides a safe, nurturing environment where children will be safely cared for and engaged in activities after regular school hours.',
      features: [
        'Flexible hourly slots until 17:30 (5:30 PM)',
        'Homework assistance and academic support',
        'Recreational activities and supervised play',
        'Indoor and outdoor activities',
        'Safe and secure environment'
      ],
      image: '/assets/img/learning.png',
      isNew: true,
      scheduleType: 'afterschool'
    }
  ];

  selectProgram(index: number) {
    this.selectedProgram = index;
  }
}
