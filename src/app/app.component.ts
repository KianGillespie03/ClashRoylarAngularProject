import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClashRoyaleService } from './clash-royale.service';
import { FavoriteService } from './favourite.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  providers: [ClashRoyaleService, FavoriteService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClashRoyaleAngularProject';

}

