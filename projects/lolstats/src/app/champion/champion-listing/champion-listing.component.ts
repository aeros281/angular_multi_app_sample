import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { strict } from 'assert';
import { PageEvent } from '@angular/material/paginator';

interface PageInfo { page: number; pageSize: number; }

@Component({
  selector: 'app-champion-listing',
  templateUrl: './champion-listing.component.html',
  styleUrls: ['./champion-listing.component.scss']
})
export class ChampionListingComponent implements OnInit {

  FETCH_URL = 'https://www.lolstats.com/api/rest/champions';

  championList: Observable<any>;
  pageInfo: Observable<PageInfo>;
  pageCount: number;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['key', 'icon', 'name', 'type', 'pickrate', 'winrate', 'details'];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
   ) { }

  ngOnInit(): void {
    this.pageInfo = this.route.queryParamMap.pipe(
      map((param: ParamMap) => {
        return {
          page: parseInt(param.get('page'), 10) || 1,
          pageSize: parseInt(param.get('pageSize'), 10) || 10,
        };
      })
    );

    this.championList = this.pageInfo.pipe(
      switchMap((pageInfo: PageInfo) => {
        const queryParams: {[key: string]: string } = this.buildPagingUrlParams(pageInfo.page, pageInfo.pageSize);
        return this.http.get(this.FETCH_URL, { params: queryParams }).pipe(
          tap((response: { data: any, count: number }) => { this.pageCount = response.count; }),
          map((response: { data: any, count: number }) => response.data),
        );
      })
    );
  }

  buildPagingUrlParams(pageNumber: number, pageSize: number) {
    return {
      page: pageNumber.toString(),
      pageSize: pageSize.toString()
    };
  }

  onPageEvent(event: PageEvent) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: { page: event.pageIndex + 1, pageSize: event.pageSize }
    });
  }

}
