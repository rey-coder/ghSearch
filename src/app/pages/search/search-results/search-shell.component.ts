import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IGHFilterOpts } from 'src/app/shared/general/github/ighfilter-opts';
import { GHSearchService } from 'src/app/shared/services/github/gh-search.service';


@Component({
  selector: 'app-search-shell',
  templateUrl: './search-shell.component.html',
  styleUrls: ['./search-shell.component.scss']
})
export class SearchShellComponent implements OnInit {

  queryString!: string;
  searchResults: any[] = [];
  searchSubject!: Subscription;
  totalCount: number = 1000;

  constructor(private route: ActivatedRoute, private searchSvc: GHSearchService, private router: Router) {
    this.route.queryParams.subscribe((params: any) => {
      if (params && 'q' in params) { 
        this.queryString = params.q;
        this.DoSearch();
      }
    });
  }

  ngOnInit(): void {
  }

  DoSearch(evt?: any, opts?: IGHFilterOpts) {
    if (!opts && evt && evt.keyCode != 13) {
      return;
    } else if (evt && evt.keyCode == 13) {
      this.router.navigate(['/search'], {queryParams: {q: this.queryString}});
    } else {
      this.searchSvc.searchResults.next([]);
      if (this.searchSubject !== undefined && !this.searchSubject.closed) {
        this.searchSubject?.unsubscribe();
      }
  
      this.searchSubject = this.searchSvc.UserSearch(this.queryString, opts)
      .subscribe((res: any) => {
        this.searchResults = res.items;
        this.totalCount = res.total_count > this.totalCount ? this.totalCount: res.total_count;
        this.searchSvc.searchResults.next(this.searchResults);
        scrollTo(0,0);
      }, (ex: any) => {
        if (!this.searchResults.length) { this.searchResults= []; }
      });
    }
    
  }

  ChangePage(evt: any) {
    this.DoSearch(null, {page: evt.page})
  }
}
