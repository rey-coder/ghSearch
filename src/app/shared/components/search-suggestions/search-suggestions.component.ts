import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { GHSearchService } from '../../services/github/gh-search.service';

@Component({
  selector: 'app-search-suggestions',
  templateUrl: './search-suggestions.component.html',
  styleUrls: ['./search-suggestions.component.scss']
})
export class SearchSuggestionsComponent implements OnInit, OnChanges {

  private searchSubject?: Subscription;
  results: any[] = [];

  @Input() searchStr!: string;

  constructor(private searchSvc: GHSearchService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if ('searchStr' in changes &&
      changes?.['searchStr'].currentValue != changes?.['searchStr'].previousValue) {
        this.FetchSuggestions();
      }
  }

  FetchSuggestions() {
    if (this.searchSubject !== undefined && !this.searchSubject.closed) {
      this.searchSubject?.unsubscribe();
    }

    this.searchSubject = this.searchSvc.UserSearch(this.searchStr, {per_page: 5})
    .subscribe((res: any) => {
      this.results = res.items;
    }, (ex: any) => {
      if (!this.searchStr.length) { this.results= []; }
      // console.log(ex);
    });
  }


}
