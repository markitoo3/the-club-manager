import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WageService } from 'src/app/services/wage.service';

@Component({
  selector: 'app-wage-input',
  templateUrl: './wage-input.component.html',
  styleUrls: ['./wage-input.component.scss']
})
export class WageInputComponent implements OnInit {

  addWageForm: FormGroup;

  constructor(fb: FormBuilder, private wageService: WageService) {
    this.addWageForm = fb.group({
      currentMoney: [''],
      monthlyIncome: ['']
    })
  }

  ngOnInit(): void {
  }

  get currentMoney() {
    return this.addWageForm.get('currentMoney') as FormControl;
  }

  get monthlyIncome() {
    return this.addWageForm.get('monthlyIncome') as FormControl;
  }

  addMoney() {
    this.wageService.addMoney(this.currentMoney.value);
    this.wageService.currentMoney = this.currentMoney.value;
  }

  addMonthlyIncome() {
    this.wageService.addMonthlyIncome(this.monthlyIncome.value);
  }
}
