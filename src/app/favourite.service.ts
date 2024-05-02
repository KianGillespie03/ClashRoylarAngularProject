import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './cardinterface';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiUrl = 'mongodb+srv://KianGillespie:kXCuLP2RmrFzNwqH@cluster0.srmihye.mongodb.net/favorites';

  constructor(private http: HttpClient) { }

  addFavorite(cardId: number): Observable<{items: Card[]}> {
    return this.http.post<{items: Card[]}>(`${this.apiUrl}/add`, { cardId });
  }

  removeFavorite(cardId: number): Observable<{items: Card[]}> {
    return this.http.delete<{items: Card[]}>(`${this.apiUrl}/remove/${cardId}`); 
  }

  getFavorites(): Observable<{items: Card[]}> {
    return this.http.get<{items: Card[]}>(`${this.apiUrl}`);
  }
}