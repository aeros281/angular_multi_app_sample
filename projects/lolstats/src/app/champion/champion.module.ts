import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { ChampionRoutingModule } from './champion-routing.module';
import { ChampionListingComponent } from './champion-listing/champion-listing.component';
import { ChampionHomeComponent } from './champion-home/champion-home.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { ChampionDetailsPopupWrapperComponent } from './champion-details-popup-wrapper/champion-details-popup-wrapper.component';

@NgModule({
  declarations: [ChampionListingComponent, ChampionHomeComponent, ChampionDetailsComponent, ChampionDetailsPopupWrapperComponent],
  imports: [
    CommonModule,
    ChampionRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule
  ],
  entryComponents: [ChampionDetailsComponent]
})
export class ChampionModule { }
