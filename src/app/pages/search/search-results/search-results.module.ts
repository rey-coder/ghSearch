import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchAllComponent } from './all/search-all.component';
import { SearchShellComponent } from './search-shell.component';
import { FormsModule } from '@angular/forms';
import { SearchSuggestionsModule } from 'src/app/shared/components/search-suggestions/search-suggestions.module';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [
    SearchAllComponent,
    SearchShellComponent
  ],
  imports: [
    CommonModule,
    SearchResultsRoutingModule, FormsModule, SearchSuggestionsModule,
    InputTextModule, DataViewModule, PaginatorModule
  ]
})
export class SearchResultsModule { }
