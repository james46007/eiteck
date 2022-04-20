import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListOneComponent } from './list-one/list-one.component';

const routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    component: ListComponent,
  },
  {
    path: "list-one/:id",
    component: ListOneComponent,
  },
];

@NgModule({
  declarations: [
    ListComponent,
    ListOneComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class CharactersModule { }
