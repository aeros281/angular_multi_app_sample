import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionRoutingModule } from './champion-routing.module';
import { ChampionListingComponent } from './champion-listing/champion-listing.component';

@NgModule({
  declarations: [ChampionListingComponent],
  imports: [
    CommonModule,
    ChampionRoutingModule
  ],
})
export class ChampionModule { }
