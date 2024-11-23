import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private apiUrl = 'http://localhost:5270/League'; // Replace with your C# API base URL

  constructor(private http: HttpClient) {}

  // Fetch leagues
  getLeagues(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
