import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreditService } from '../../service/credit.service';
import { ResponseCredit } from '../../interfaces/responseCredit';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-credit-table',
  templateUrl: './credit-table.component.html',
  styleUrls: ['./credit-table.component.css']
})
export class CreditTableComponent {

  @Input() credits: Observable<ResponseCredit[]> = EMPTY;

  constructor(private creditService : CreditService){}

  selectedCredit(selectedCredit: ResponseCredit) {
    this.creditService.setSelectedCredit(selectedCredit)
  }
}
