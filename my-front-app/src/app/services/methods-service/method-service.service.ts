import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MethodNode } from '@app/models/method-node.model';

@Injectable({
  providedIn: 'root'
})
export class MethodService {

  private apiUrl = 'http://localhost:8082/api-method/v1';

  constructor(private http: HttpClient) { }

  getAllMethods(): Observable<MethodNode[]> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });

    return this.http.get<MethodNode[]>(`${this.apiUrl}/methods`, { headers: headers });
  }

}
