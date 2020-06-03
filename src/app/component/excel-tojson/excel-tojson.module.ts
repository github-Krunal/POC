import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExcelTojsonComponent } from './excel-tojson.component';

const excelToJson: Routes = [{ path: '', component: ExcelTojsonComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(excelToJson), CommonModule],
})
export class ExcelTojsonModule {}
