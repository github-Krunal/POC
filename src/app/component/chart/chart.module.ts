import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { RouterModule, Routes } from '@angular/router';

const accountRouting: Routes = [{ path: '', component: ChartComponent }];
@NgModule({
  declarations: [ChartComponent],
  imports: [RouterModule.forChild(accountRouting), CommonModule],
})
export class ChartModule {}
