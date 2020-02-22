import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionListingComponent } from './champion-listing/champion-listing.component';


const routes: Routes = [
  { path: '', component: ChampionListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionRoutingModule { }
