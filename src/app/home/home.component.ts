import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  skills = [
    { name: 'Flutter', level: 90, icon: 'fab fa-flutter' },
    { name: 'Angular', level: 85, icon: 'fab fa-angular' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js' },
    { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
    { name: 'Java', level: 80, icon: 'fab fa-java' },
  ];

  experiences = [
    {
      position: 'Full Stack Engineer',
      company: 'PT. Andal Software Sejahtera',
      period: 'Jul 2024 - Okt 2024',
      description:
        'Developed and maintained web applications using Angular and DevExtreme, implemented GraphQL for data management, and optimized CI/CD pipelines using Azure DevOps.',
    },
    {
      position: 'Software Engineer (Internship)',
      company: 'PT. Stechoq Robotika Indonesia',
      period: 'Aug 2022 - Dec 2022',
      description:
        'Developed Gembala Apps using Flutter with Riverpod for state management, integrated REST APIs, and improved performance to enhance user experience.',
    },
  ];
}
