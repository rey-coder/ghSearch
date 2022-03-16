import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchAllComponent } from './all/search-all.component';


@NgModule({
  declarations: [
    SearchAllComponent
  ],
  imports: [
    CommonModule,
    SearchResultsRoutingModule
  ]
})
export class SearchResultsModule { }
