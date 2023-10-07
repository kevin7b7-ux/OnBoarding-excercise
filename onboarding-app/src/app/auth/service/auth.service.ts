import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environmets/environment';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = environment.baseUrl;
  private token!: Token;
  constructor(private http: HttpClient) { }

  login(email : string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<Token>(`${this.baseUrl}/auth/login`, email, httpOptions);
  }

  setToken(token: Token){
    this.token = token;
  }

  getToken(){
    return this.token;
  }




}
