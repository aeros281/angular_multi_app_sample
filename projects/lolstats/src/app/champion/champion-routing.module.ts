import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionListingComponent } from './champion-listing/champion-listing.component';
import { ChampionHomeComponent } from './champion-home/champion-home.component';
import { ChampionDetailsPopupWrapperComponent } from './champion-details-popup-wrapper/champion-details-popup-wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: ChampionHomeComponent,
    children: [
      { path: '', component: ChampionListingComponent,
        children: [
          { path: ':id', component: ChampionDetailsPopupWrapperComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionRoutingModule { }
