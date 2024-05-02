import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './cardinterface';

@Injectable({
  providedIn: 'root'
})
export class ClashRoyaleService {
  private apiUrl = 'https://api.clashroyale.com/v1/cards';
  private apiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjhhYWIwNzIxLWIzYmItNDBmZi05YjgzLTI1ZjM0YzQzY2RhZiIsImlhdCI6MTcxMjkxODc5MCwic3ViIjoiZGV2ZWxvcGVyLzRkNjFmYzQyLWFmY2QtY2U2ZS0yMmRkLTczMzU5NTQ0MzU2MCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIwLjAuMC4wIl0sInR5cGUiOiJjbGllbnQifV19.4Z6G0ARX0cctEvkcGcNOuPBCB81At0MU1C5ULgsKQ1-CcUXvD6gZMZm_pP1ogTGy0fMJfx4-m6YAuP0vnuL70Q'; // Replace with your actual API token

  constructor(private http: HttpClient) { }

  // Example method to fetch card data
  getCards(): Observable<{items: Card[]}> {
    // Define the headers with the Authorization token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiToken}`
    });

    // Make the HTTP GET request with the headers
    return this.http.get<{items: Card[]}>(this.apiUrl, { headers });
  }
}
