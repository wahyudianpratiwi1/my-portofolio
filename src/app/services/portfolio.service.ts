import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Portfolio } from '../models/portofolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private portfolios: Portfolio[] = [
    {
      id: 1,
      title: 'Hypertension Control Application',
      category: 'Mobile Development',
      imageUrl: 'assets/project1.png',
      // videoUrl: 'assets/videos/health-app-demo.mp4',
      description:
        'Mobile app providing self-management information for hypertension patients.',
      date: new Date('2024-03-10'),
      content:
        'The Ht.Co (Hypertension Control) application is an app that provides information on self-management for individuals with hypertension. The Hy.Co (Hypertension Control) application is designed to help users easily access information about self-management for hypertension patients. The main advantage of this application is that it can be accessed anytime, anywhere, in a practical way. The features of the Ht.Co (Hypertension Control) application include Sign In and Log In for registered users, a Knowledge Menu containing materials such as "What is Hypertension?", "What is Hypertension Self-Management?", and "DASH Diet." Additionally, the app provides a Daily Food Log to record consumed foods, a Physical Activity Log to track exercise (including duration and type of exercise), and a Reminder Schedule with notifications for meals, exercise, and medication intake (daily reminders). Other features include a Health Monitoring Log for tracking blood pressure, a Chat with Admin feature (where users can communicate directly with researchers), and an Exit Menu to close the application.',
      tags: ['Flutter', 'Dart', 'Firebase'],
      downloadUrl:
        'https://play.google.com/store/apps/details?id=com.wdp16.kesehatanmobile',
    },
    {
      id: 2,
      title: 'Fuel Level Monitoring Application',
      category: 'Mobile Development',
      imageUrl: 'assets/images/portfolio-fuel-level.jpg',
      description:
        'Monitoring level system that tracks fuel tank capacity using IoT technology.',
      date: new Date('2024-02-15'),
      content:
        'This app provides real-time monitoring of fuel usage with historical data tracking features.',
      tags: ['Flutter', 'GetX', 'Firebase'],
    },
    {
      id: 3,
      title: 'Gembala Apps',
      category: 'Mobile Development',
      imageUrl: 'assets/images/portfolio-gembala.jpg',
      description:
        'Sheep farm management system for tracking livestock development.',
      date: new Date('2024-06-01'),
      content:
        'Developed a mobile application for efficient sheep farm management, tracking health and growth.',
      tags: ['Flutter', 'Riverpod', 'API Integration'],
    },
    {
      id: 4,
      title: 'Egg Monitoring Application',
      category: 'Mobile Development',
      imageUrl: 'assets/images/portfolio-egg-monitor.jpg',
      description:
        'App for monitoring egg incubation with humidity and temperature controls.',
      date: new Date('2024-04-18'),
      content:
        'Ensures optimal conditions for egg hatching with real-time monitoring and alerts.',
      tags: ['Flutter', 'Firebase', 'IoT'],
    },
    {
      id: 5,
      title: 'Plant Monitoring Application',
      category: 'Mobile Development',
      imageUrl: 'assets/images/portfolio-plant-monitor.jpg',
      description:
        'Remote monitoring system for plant growth and environmental conditions.',
      date: new Date('2024-05-02'),
      content:
        'Tracks humidity, temperature, and lighting to optimize plant growth conditions.',
      tags: ['Flutter', 'Firebase', 'IoT'],
    },
    {
      id: 6,
      title: 'Robot Tambak',
      category: 'IoT & Mobile Development',
      imageUrl: 'assets/images/portfolio-robot-tambak.jpg',
      description: 'Smart aquaculture monitoring system for fish farming.',
      date: new Date('2024-05-10'),
      content:
        'Monitors water quality parameters like temperature and pH while managing fish feeding systems.',
      tags: ['Flutter', 'GetX', 'Firebase', 'IoT'],
    },
    {
      id: 7,
      title: 'Anti Pest Monitoring Application',
      category: 'Mobile Development',
      imageUrl: 'assets/images/portfolio-anti-pest.jpg',
      description:
        'Application for monitoring and controlling plant pests with sound frequencies.',
      date: new Date('2024-04-05'),
      content:
        'This app allows farmers to track and automate pest control with custom scheduling features.',
      tags: ['Flutter', 'GetX', 'Firebase'],
    },
  ];

  constructor() {}

  getPortfolios(): Observable<Portfolio[]> {
    return of(this.portfolios);
  }

  getPortfolioById(id: number): Observable<Portfolio | undefined> {
    const portfolio = this.portfolios.find((p) => p.id === id);
    return of(portfolio);
  }
}
