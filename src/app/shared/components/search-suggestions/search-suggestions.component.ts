import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GHSearchService } from '../../services/github/gh-search.service';

@Component({
  selector: 'app-search-suggestions',
  templateUrl: './search-suggestions.component.html',
  styleUrls: ['./search-suggestions.component.scss']
})
export class SearchSuggestionsComponent implements OnInit, OnChanges, OnDestroy {

  private searchSubject?: Subscription;
  results: any[] = [];

  @Input() searchStr!: string;
  @Input() showSuggestions: boolean = true;

  constructor(private searchSvc: GHSearchService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if ('searchStr' in changes &&
      changes?.['searchStr'].currentValue != changes?.['searchStr'].previousValue) {
        this.FetchSuggestions();
      }
  }

  ngOnDestroy(): void {
    if (this.searchSubject !== undefined && !this.searchSubject.closed) {
      this.searchSubject?.unsubscribe();
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
    });
  }

  FollowSuggestion(evt: any) {
    this.router.navigate(['/search'], { queryParams: {q: evt.option.login} });
  }


}
