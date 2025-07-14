import { FormsModule } from '@angular/forms';
import { Component, output, signal } from '@angular/core';

import type { InvestmentModel } from '../investiment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  calculate = output<InvestmentModel>();
  // @Output() calculate = new EventEmitter<InvestmentModel>();

  // Default values
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('15');
  enteredDuration = signal('10');

  onReset() {
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredDuration.set('10');
    this.enteredExpectedReturn.set('15');
  }

  onSubmit() {
    this.calculate.emit({
      // The unary plus operator converts the string value to a number.
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    this.onReset();
  }
}
