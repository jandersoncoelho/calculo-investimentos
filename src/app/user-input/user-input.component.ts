import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { InvestmentModel } from '../investiment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  // calculate = output();
  @Output() calculate = new EventEmitter<InvestmentModel>();

  // Default values
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '15';
  enteredDuration = '10';


  onReset() {
    this.enteredInitialInvestment = '0';
    this.enteredDuration = '10';
    this.enteredExpectedReturn = '15';
    this.enteredAnnualInvestment = '10';
  }

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment
    });
    // console.log('SUBMITED');
    // console.log('Initial Investment:', this.enteredInitialInvestment);
    // console.log('Annual Investment:', this.enteredAnnualInvestment);
    // console.log('Expected Return:', this.enteredExpectedReturn);
    // console.log('Duration:', this.enteredDuration);
  }
}
