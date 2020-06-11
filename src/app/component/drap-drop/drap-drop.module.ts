import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrapDropComponent } from './drap-drop.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { Routes, RouterModule } from '@angular/router';

const drapanddrop: Routes = [{ path: '', component: DrapDropComponent }];

@NgModule({
  declarations: [DrapDropComponent],
  imports: [
    RouterModule.forChild(drapanddrop),
    CommonModule,
    AngularMaterialModule,
  ],
})
export class DrapDropModule {}
