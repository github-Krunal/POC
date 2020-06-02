import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { Routes, RouterModule } from '@angular/router';
import { SignUpService } from '../account/sign-up/sign-up.service';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

const accountRouting: Routes = [{ path: '', component: TableComponent }];

@NgModule({
  declarations: [TableComponent],

  imports: [
    RouterModule.forChild(accountRouting),
    AngularMaterialModule,
    CommonModule,
  ],
  providers: [SignUpService],
})
export class TableModule {}
