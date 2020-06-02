import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcumComponent } from './breadcum.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcumComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcumComponent],
})
export class BreadcumModule {}
