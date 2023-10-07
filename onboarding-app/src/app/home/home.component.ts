import { Component } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';
import { CreditService } from './service/credit.service';
import { ResponseCredit } from './interfaces/responseCredit';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  credits: Observable<ResponseCredit[]> = EMPTY;
  selectedCredit!: ResponseCredit;

  constructor(creditService: CreditService) {
    this.credits = creditService.getCredits();
  
  }

  getSelectedCredit(selectedCredit : ResponseCredit){
    this.selectedCredit = selectedCredit;
  }

}
