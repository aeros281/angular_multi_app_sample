import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { tap, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  id: number;
}

@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.scss']
})
export class ChampionDetailsComponent implements OnInit {

  FETCH_URL = 'https://www.lolstats.com/api/rest/champions/details';
  champId: number;
  champInfo: Observable<any>;

  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.champId = this.data.id;

    this.champInfo = this.http.get(this.buildGetChampUrl(this.champId), { params: { id: this.champId.toString() }}).pipe(
      tap(console.log),
      map(data => data.data)
     );

    this.champInfo.subscribe();
  }

  buildGetChampUrl(id: number) {
    return this.FETCH_URL + '?id=' + id.toString();
  }

}
