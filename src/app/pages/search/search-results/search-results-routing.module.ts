import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAllComponent } from './all/search-all.component';

const routes: Routes = [
  {
    path: '',
    component: SearchAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsRoutingModule { }
