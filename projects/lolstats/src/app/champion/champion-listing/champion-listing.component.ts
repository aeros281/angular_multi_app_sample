import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-champion-listing',
  templateUrl: './champion-listing.component.html',
  styleUrls: ['./champion-listing.component.scss']
})
export class ChampionListingComponent implements OnInit {

  championList: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.championList = this.http.get('https://www.lolstats.com/api/rest/champions');
  }

}
