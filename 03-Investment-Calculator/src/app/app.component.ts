import { Component, signal } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { type InvestmentInput } from './user-input/investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { type InvestmentResult } from './investment-results/investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsData = signal<InvestmentResult[] | undefined>(undefined);

  onCalculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  this.resultsData.set(annualData);
  }
}
