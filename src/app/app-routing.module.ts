
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableSortingComponent } from './table/table.component';


const routes: Routes = [
  { path: '', component: TableSortingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
