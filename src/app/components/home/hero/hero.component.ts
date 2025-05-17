import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
title = 'Nurturing Young Minds at David & Mary Academy';
  description = 'A premier preschool offering Cambridge curriculum for children ages 2.5 to 6 years, where learning is fun and development is priority.';
  ageRange = '2.5-6';
  enrollingNow = true;
}
