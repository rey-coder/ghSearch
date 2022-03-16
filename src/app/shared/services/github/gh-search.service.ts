import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGHFilterOpts } from '../../general/github/ighfilter-opts';
import { configs } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GHSearchService {

  constructor(private http: HttpClient) { }

  UserSearch(q?: string, filterOpts?: IGHFilterOpts) {
    const filter =  filterOpts ? Object.keys(filterOpts).map((key: string) => `${key}=${filterOpts[key as keyof typeof filterOpts]}`).join('&') : '';
    return this.http.get(`${configs.gHEndpoint}search/users?q=${q}${filter.length ? `&${filter}` : ''}`)
  }
}
