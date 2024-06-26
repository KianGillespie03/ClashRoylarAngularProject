// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { ClashRoyaleService } from '../clash-royale.service';
import { CommonModule } from '@angular/common';
import { Card } from '../cardinterface';
import { FavoriteService } from '../favourite.service';

@Component({
  selector: 'app-card-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-catalog.component.html',
  styleUrls: ['./card-catalog.component.css']
})
export class CardCatalogComponent implements OnInit {
  cards: Card[] = [];
  filteredCards: Card[] = [];
  searchquery: string = '';

  constructor(private clashRoyaleService: ClashRoyaleService, private favoriteService: FavoriteService) { }
  

  ngOnInit(): void {
    this.fetchCards();
  }

  fetchCards(): void {
    this.clashRoyaleService.getCards().subscribe(
      (response) => {
        console.log('API Response:', response);
        this.cards = response.items;
        this.filteredCards = this.cards
      },
      
    );
  } 
  
  filterCards(event: any): void {
    const searchQuery = event.target.value;
    if (!searchQuery.trim()) {
      this.filteredCards = this.cards;
    } else {
      this.filteredCards = this.cards.filter(card =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  }
  

  // Clear search query and show all cards
  clearSearch(): void {
    this.searchquery = '';
    this.filterCards('');
  }

  toggleFavorite(cardId: number): void {
    this.favoriteService.addFavorite(cardId).subscribe(
      (response) => {
        console.log('Card added to favorites:', response);
      },
      (error) => {
        console.error('Error adding card to favorites:', error);
      }
    );
  }

}
