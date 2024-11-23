import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:5270/Player'; // Replace with your C# API base URL

  constructor(private http: HttpClient) {}

  // Fetch leagues
  getPlayers(league: string, team: string): Observable<any[]> {
    const params = new HttpParams()
      .set('league', league)
      .set('team', team);
    
    return this.http.get<any[]>(this.apiUrl, { params });
  }
}
