import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAllComponent } from './all/search-all.component';
import { SearchShellComponent } from './search-shell.component';

const routes: Routes = [
  {
    path: '',
    component: SearchShellComponent,
    children: [
      {
        path: '',
        component: SearchAllComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsRoutingModule { }
