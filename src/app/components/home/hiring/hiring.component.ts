import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hiring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiring.component.html',
  styleUrl: './hiring.component.css'
})
export class HiringComponent {
  openPositions = [
    {
      id: 1,
      title: 'Preschool Teacher',
      type: 'Full-time',
      requirements: [
        'B.Ed, D.Ed, or equivalent degree in Early Childhood Education',
        'Minimum 2 years of experience with preschool children',
        'Familiarity with Cambridge Early Years curriculum (preferred)',
        'Excellent communication and interpersonal skills'
      ],
      responsibilities: [
        'Plan and deliver engaging, age-appropriate lessons',
        'Create a nurturing and stimulating classroom environment',
        'Monitor and assess children\'s progress',
        'Maintain regular communication with parents'
      ]
    },
    {
      id: 2,
      title: 'Assistant Teacher',
      type: 'Full-time',
      requirements: [
        'Diploma or degree in Early Childhood Education',
        'Experience working with young children (1+ years)',
        'Patient, caring, and energetic personality',
        'Team player with positive attitude'
      ],
      responsibilities: [
        'Support lead teacher in classroom activities',
        'Assist with daily routines and care of children',
        'Help prepare learning materials and classroom setup',
        'Supervise children during play and activities'
      ]
    }
  ];

  benefits = [
    'Competitive salary',
    'Professional development opportunities',
    'Supportive work environment',
    'Opportunity to make a real difference'
  ];
}
