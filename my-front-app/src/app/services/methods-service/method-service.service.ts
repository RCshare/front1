import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MethodNode } from '@app/models/method-node.model';

@Injectable({
  providedIn: 'root'
})
export class MethodService {

  private apiUrl = 'http://localhost:8082/methods';

  constructor(private http: HttpClient) { }

  getAllMethods(): Observable<MethodNode[]> {
    return this.http.get<MethodNode[]>(this.apiUrl);
  }
}
