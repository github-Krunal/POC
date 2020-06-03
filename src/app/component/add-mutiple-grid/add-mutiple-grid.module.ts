import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddMutipleGridComponent } from './add-mutiple-grid.component';

const addMultiGrid: Routes = [
  {
    path: '',
    component: AddMutipleGridComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(addMultiGrid), CommonModule],
})
export class AddMutipleGridModule {}
