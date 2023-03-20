import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { LoginResponse } from '@app/models/interface/login-response.model';
import { UserCredential } from '@app/models/user-credentials.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const encodedCredentials = this.encodeCredentials(username, password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${encodedCredentials}`
    });

    const body = { 'username': username, 'password': password };
    
    return this.http.post<any>(`${this.apiUrl}/authenticate`, body, { headers });
  }

  

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }
  
  encodeCredentials(username: string, password: string): string {
    const credentials = `${username}:${password}`;
    const credentialsBase64 = btoa(credentials);
    return credentialsBase64;
  }

  public checkAuthentication(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

      return this.http.post<any>(`${this.apiUrl}/verifyToken`, {}, { headers }).pipe(
        map(response => true),
        catchError(error => {
          console.log(error);
          return of(false);
        })
      );
    } else {
      return of(false);
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
}  
