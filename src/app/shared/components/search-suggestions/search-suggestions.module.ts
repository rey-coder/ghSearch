import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSuggestionsComponent } from './search-suggestions.component';
import { ListboxModule } from 'primeng/listbox';


@NgModule({
  declarations: [
    SearchSuggestionsComponent
  ],
  imports: [
    CommonModule, ListboxModule
  ],
  exports: [
    SearchSuggestionsComponent
  ]
})
export class SearchSuggestionsModule { }
