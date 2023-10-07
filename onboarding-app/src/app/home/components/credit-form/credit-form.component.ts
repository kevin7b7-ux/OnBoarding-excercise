import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CreditService } from '../../service/credit.service';
import { RequestMonthlyFee } from '../../interfaces/requestMonthlyFee';
import { environment } from 'src/app/environmets/environment';
import { filter, tap } from 'rxjs';


@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent implements OnInit {

  readonly creditForm: FormGroup;
  interestRates = environment.interestRates;
  showMonthlyFeeError = false;
  id: number = 0;

  constructor(fb: FormBuilder, private router: Router, private authService: AuthService, private creditService: CreditService) {

    this.creditForm = fb.group({
      owner: [, Validators.required],
      amount: [, [Validators.required, Validators.min(100000)]],
      term: [, [Validators.required, Validators.min(1)]],
      interestRate: [, Validators.required],
      monthlyFee: [, Validators.required]
    });

    this.detectChangesToCalculateMonthlyFee();

  }

  ngOnInit() {

    this.creditService.selectedCredit$.subscribe((credit) => {
      this.id = credit.id;
      if (this.id !== 0) {
        console.log(credit)
        this.creditForm.patchValue(credit || {});
      }
    });
  }

  detectChangesToCalculateMonthlyFee() {
    this.creditForm.get("amount")!.valueChanges.subscribe(() => {
      this.calculateMonthlyFee();
    });

    this.creditForm.get("term")!.valueChanges.subscribe(() => {
      this.calculateMonthlyFee();
    });

    this.creditForm.get("interestRate")!.valueChanges.subscribe(() => {
      this.calculateMonthlyFee();
    });
  }

  private calculateMonthlyFee() {
    const amount = this.creditForm.get("amount")!;
    const term = this.creditForm.get("term")!;
    const interestRate = this.creditForm.get("interestRate")!;

    if (amount.value !== null && term.value !== null && interestRate.value !== null) {
      const obj: RequestMonthlyFee = {
        amount: amount.value,
        term: term.value,
        interestRate: interestRate.value
      };

      this.creditService.getMonthlyFee(obj).
      pipe(
        filter(value => typeof value === 'number' && !isNaN(value))
      )
      .subscribe(value => {
      
      this.creditForm.patchValue({ monthlyFee: value }, { emitEvent: false });
      this.showMonthlyFeeError = false;
      });
    } else {
      this.creditForm.patchValue({ monthlyFee: null }, { emitEvent: false });
      this.showMonthlyFeeError = true;
    }
  }

  resetForm() {
    this.id = 0;
    this.creditForm.reset();
    this.showMonthlyFeeError = false;
  }

  cancelUpdate(){
    this.resetForm();
  }

  onSend() {
    if (this.creditForm.valid) {
      if (this.id === 0) {

        this.creditService.createCredit(this.creditForm.value).subscribe(
          creditCreated => {
            alert(`The credit has been created successfully ${creditCreated.id}`);
            this.resetForm();

          }
        )
      } else {
        this.creditService.updateCredit(this.creditForm.value, this.id).subscribe(
          creditUpdated => {
            alert(`The credit has been updated successfully ${creditUpdated.id}`)
            this.resetForm();
          }
        )
      }
    } else {
      this.creditForm.markAllAsTouched()
    }
  }
}
