import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';

const language: Routes = [{ path: '', component: LanguageComponent }];

@NgModule({
  declarations: [LanguageComponent],
  imports: [
    RouterModule.forChild(language),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    PipeModule,
  ],
})
export class LanguageModule {}
