import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ChampionDetailsComponent } from '../champion-details/champion-details.component';

@Component({
  selector: 'app-champion-details-popup-wrapper',
  templateUrl: './champion-details-popup-wrapper.component.html',
  styleUrls: ['./champion-details-popup-wrapper.component.scss']
})
export class ChampionDetailsPopupWrapperComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => this.openDialog(parseInt(params.get('id'), 10)));
  }

  openDialog(champId: number): void {
    const dialogRef = this.dialog.open(ChampionDetailsComponent, {
      data: { id: champId }
    });

    dialogRef.afterClosed().subscribe(this.navigateBack.bind(this));
  }

  navigateBack(): void {
    const previousQueryParams = this.route.snapshot.queryParams;
    this.router.navigate(['..'], { relativeTo: this.route, queryParams: previousQueryParams });
  }

}
