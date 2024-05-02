

import { Routes } from '@angular/router';
import { CardCatalogComponent } from './card-catalog/card-catalog.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: '/card-catalog', pathMatch: 'full' },
  { path: 'card-catalog', component: CardCatalogComponent },
  { path: 'favorites', component: FavoritesComponent }
];

export default routes;

