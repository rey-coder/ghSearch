import { Component, OnInit } from '@angular/core';
import { GHSearchService } from 'src/app/shared/services/github/gh-search.service';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.scss']
})
export class SearchAllComponent implements OnInit {

  searchResults: any[] = [];

  resultSummary: any;
  loadingSummary = {
    index: -1,
    loading: false
  };

  constructor(
    private searchSvc: GHSearchService
  ) {
    
  }

  ngOnInit(): void {
    this.searchSvc.searchResults.subscribe((result: any) => {
      this.searchResults = result;
    })
  }

  ToggleSummary(result: any, index: number) {
    if (this.loadingSummary.loading) {
      return;
    }

    if (result.showSummary) {
      result.showSummary = false;
    } else {
      result.showSummary = true;
      this.loadingSummary = {
        index,
        loading: true
      };

      if (!result.summary) {
        Promise.all([
          fetch(`${result.followers_url}`),
          fetch(`${result.subscriptions_url}`),
          fetch(`${result.repos_url}`)]
        ).then(responses =>
          Promise.all(responses.map(res => res.json()))
        ).then(([r1, r2, r3]) => {
          this.loadingSummary.loading = false;
          result.summary = {
            followers: r1.splice(0, 5).map((x: any) => x.login).join(','),
            subscriptions: r2.splice(0, 5).map((x: any) => x.name).join(','),
            repos: r3.splice(0, 5).map((x: any) => x.name).join(','),
          }
        });
      }
      
    }

  }
}
