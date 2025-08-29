import { Component, inject } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentResults = inject(InvestmentService);
  // constructor(private investmentService: InvestmentService) {}

  get results() {
    return this.investmentResults.resultData;
  }
}
