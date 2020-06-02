import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadExcelComponent } from '../download-excel/download-excel.component';
import { Routes, RouterModule } from '@angular/router';
const downloadExcel: Routes = [{ path: '', component: DownloadExcelComponent }];

@NgModule({
  declarations: [DownloadExcelComponent],
  imports: [RouterModule.forChild(downloadExcel), CommonModule],
})
export class DownloadExcelModule {}
