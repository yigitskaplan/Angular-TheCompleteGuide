import { Component, computed, inject } from '@angular/core';

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

  results = computed(() => this.investmentResults.resultData());
  // results = this.investmentResults.resultData.asReadonly();
}
