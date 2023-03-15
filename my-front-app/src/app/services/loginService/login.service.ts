import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '@app/models/login-response.model';
import { UserCredential } from '@app/models/user-credentials.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/users'; // L'URL de l'API

  constructor(private http: HttpClient) { }

  login(name: string, password: string): Observable<LoginResponse> {
    const url = `${this.apiUrl}/login`;
    const credentials = new UserCredential(name, password);
    return this.http.post<LoginResponse>(url, credentials);
  }
}
