import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environmets/environment';
import { RequestMonthlyFee } from '../interfaces/requestMonthlyFee';
import { RequestCredit } from '../interfaces/requestCredit';
import { ResponseCredit } from '../interfaces/responseCredit';
import { BehaviorSubject, EMPTY, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  private baseUrl : string = environment.baseUrl;

  private creditsSubject = new BehaviorSubject<ResponseCredit[]>([]);
  private credits$ = this.creditsSubject.asObservable()
  private emptyCredit : ResponseCredit={ id:0, owner:"", amount:0, term:1, interestRate:0, monthlyFee: 0} 
  private selectedCreditSubject = new BehaviorSubject<ResponseCredit>(this.emptyCredit);
  public selectedCredit$ = this.selectedCreditSubject.asObservable();
  
  constructor(private http:HttpClient) { }

  
  getMonthlyFee(request: RequestMonthlyFee){
    return this.http.post(`${this.baseUrl}/monthly-fee`, request);
  }

  setSelectedCredit(credit : ResponseCredit){
    this.selectedCreditSubject.next(credit);
  }

  getCredits(): Observable<ResponseCredit[]>{
     this.http.get<ResponseCredit[]>(`${this.baseUrl}/credit`).subscribe(
      credits => this.creditsSubject.next(credits)
    )
    return this.credits$;
  }

  createCredit(credit: RequestCredit): Observable<ResponseCredit> {
    return this.http.post<ResponseCredit>(`${this.baseUrl}/credit`, credit).pipe(
      switchMap(newCredit => {
        const updatedCredits = [...this.creditsSubject.value, newCredit];
        this.creditsSubject.next(updatedCredits);
        return of(newCredit);
      })
    );
  }

  updateCredit(credit: RequestCredit, creditId: number): Observable<ResponseCredit> {
    return this.http.put<ResponseCredit>(`${this.baseUrl}/credit/${creditId}`, credit).pipe(
      switchMap(creditUpdate => {
        const updatedCredits = this.creditsSubject.value.map(creditItem => {
          if (creditItem.id === creditUpdate.id) {
            return creditUpdate; 
          } else {
            return creditItem;
          }
        });
        this.creditsSubject.next(updatedCredits);
        return of(creditUpdate);
      })
    );
  }
  
}

