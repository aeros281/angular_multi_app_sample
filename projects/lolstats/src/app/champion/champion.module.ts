import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionRoutingModule } from './champion-routing.module';
import { ChampionListingComponent } from './champion-listing/champion-listing.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [ChampionListingComponent],
  imports: [
    CommonModule,
    ChampionRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
})
export class ChampionModule { }
