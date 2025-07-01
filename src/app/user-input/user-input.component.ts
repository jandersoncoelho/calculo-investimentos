import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '15';
  duration = '10';

  onReset() {
    this.initialInvestment = '0';
    this.duration = '10';
    this.expectedReturn = '15';
    this.annualInvestment = '10';
  }

  onSubmit() {
    console.log('SUBMITED');
    console.log('Initial Investment:', this.initialInvestment);
    console.log('Annual Investment:', this.annualInvestment);
    console.log('Expected Return:', this.expectedReturn);
    console.log('Duration:', this.duration);
  }
}
