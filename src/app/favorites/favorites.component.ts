// favorite.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favourite.service';
import { Card } from '../cardinterface';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteCards: any[] = [];

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.fetchFavoriteCards();
  }

  fetchFavoriteCards(): void {
    this.favoriteService.getFavorites().subscribe(
      (response) => {
        this.favoriteCards = response.items;
      },
      (error) => {
        console.error('Error fetching favorite cards:', error);
      }
    );
  }

  removeFavorite(cardId: number): void {
    this.favoriteService.removeFavorite(cardId).subscribe(
      () => {
        this.favoriteCards = this.favoriteCards.filter(card => card.id !== cardId);
      },
      (error) => {
        console.error('Error removing favorite card:', error);
      }
    );
  }
}
