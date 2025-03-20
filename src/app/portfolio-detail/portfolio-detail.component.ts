import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Portfolio } from '../models/portofolio.model';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss'],
})
export class PortfolioDetailComponent implements OnInit {
  portfolio?: Portfolio;

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.portfolioService.getPortfolioById(id).subscribe((portfolio) => {
        this.portfolio = portfolio;
      });
    });
  }
}
