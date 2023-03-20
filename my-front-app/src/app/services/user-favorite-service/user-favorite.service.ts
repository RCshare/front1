import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserFavoriteEntity } from '@app/models/entity/user-favorite.entity.model';
import { Observable } from 'rxjs';
import { AuthService } from '../login-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserFavoriteService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserFavoritesByIdUser(idUser: number): Observable<UserFavoriteEntity[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<UserFavoriteEntity[]>(`${this.apiUrl}/user/${idUser}`, { headers });
  }
}
