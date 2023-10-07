import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/app/environmets/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    if (this.shouldAddToken(request)) {
      const token = this.authService.getToken().accessToken

      const authorizedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

   
      return next.handle(authorizedRequest);
    }

   
    return next.handle(request);
  }

  private shouldAddToken(request: HttpRequest<any>): boolean {
    return environment.interceptableRoutes.some((allowedUrl) =>
    request.url.startsWith(allowedUrl)
  );
  }
}
