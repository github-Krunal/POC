import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcumComponent } from './breadcum.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcumComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcumComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class BreadcumModule {}
