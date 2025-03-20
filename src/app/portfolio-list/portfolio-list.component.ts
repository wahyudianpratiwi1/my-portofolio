import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Portfolio } from '../models/portofolio.model';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss'],
})
export class PortfolioListComponent implements OnInit {
  portfolios: Portfolio[] = [];
  filteredPortfolios: Portfolio[] = [];
  searchText: string = '';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getPortfolios().subscribe((data) => {
      this.portfolios = data;
      this.filteredPortfolios = data;
    });
  }

  ngDoCheck(): void {
    if (this.searchText) {
      this.filteredPortfolios = this.portfolios.filter(
        (item) =>
          item.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) ||
          item.tags.some((tag: string) =>
            tag.toLowerCase().includes(this.searchText.toLowerCase())
          )
      );
    } else {
      this.filteredPortfolios = this.portfolios;
    }
  }
}
