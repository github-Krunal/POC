import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'systemLogin', pathMatch: 'full' },
  {
    path: 'systemLogin',
    loadChildren: () =>
      import('./component/logsystem/logsystem.module').then(
        (account) => account.LogsystemModule
      ),
    data: { breadcrumb: 'login' },
  },
  // {
  //   path: 'account',
  //   loadChildren: () =>
  //     import('./component/account/account.module').then(
  //       (account) => account.AccountModule
  //     ),
  //   data: { breadcrumb: 'account' },
  // },
  // {
  //   path: 'drag',
  //   loadChildren: () =>
  //     import('./component/drap-drop/drap-drop.module').then(
  //       (drag) => drag.DrapDropModule
  //     ),
  //   data: { breadcrumb: 'drag' },
  // },
  // {
  //   path: 'chart',
  //   loadChildren: () =>
  //     import('./component/chart/chart.module').then((m) => m.ChartModule),
  //   data: { breadcrumb: 'chart' },
  // },
  // {
  //   path: 'table',
  //   loadChildren: () =>
  //     import('./component/table/table.module').then((m) => m.TableModule),
  //   data: { breadcrumb: 'table' },
  // },
  // {
  //   path: 'excel',
  //   loadChildren: () =>
  //     import('./download-excel/download-excel.module').then(
  //       (m) => m.DownloadExcelModule
  //     ),
  //   data: { breadcrumb: 'excel' },
  // },
  // {
  //   path: 'excelToJson',
  //   loadChildren: () =>
  //     import('./component/excel-tojson/excel-tojson.module').then(
  //       (m) => m.ExcelTojsonModule
  //     ),
  //   data: { breadcrumb: 'excelToJson' },
  // },
  // {
  //   path: 'addMultigrid',
  //   loadChildren: () =>
  //     import('./component/add-mutiple-grid/add-mutiple-grid.module').then(
  //       (m) => m.AddMutipleGridModule
  //     ),
  //   data: { breadcrumb: 'multigrid' },
  // },
  // {
  //   path: 'Language',
  //   loadChildren: () =>
  //     import('./component/language/language.module').then(
  //       (m) => m.LanguageModule
  //     ),
  //   data: { breadcrumb: 'language' },
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
