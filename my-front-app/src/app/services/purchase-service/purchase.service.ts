import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '@app/models/entity/article.entity.model';
import { Category } from '@app/models/entity/category.entity.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private readonly baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getPurchasedArticlesByCategory(): Observable<Category[]> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get<Category[]>(`${this.baseUrl}/purchasedArticlesByCategory`, { headers: headers });
  }
  
}
