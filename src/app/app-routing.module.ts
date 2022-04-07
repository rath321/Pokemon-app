import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { PageNotExistComponent } from './components/page-not-exist/page-not-exist.component';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';

const routes: Routes = [
  { path: 'data', component:PokemonDataComponent },
  // { path: '', component:PokemonDataComponent },
  { path:'details/:id', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
