import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './component/menu/menu.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './shared/loader/loader.component';
import { BreadcumModule } from './component/breadcum/breadcum.module';
import { ExcelTojsonComponent } from './component/excel-tojson/excel-tojson.component';
import { AddMutipleGridComponent } from './component/add-mutiple-grid/add-mutiple-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoaderComponent,
    ExcelTojsonComponent,
    AddMutipleGridComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule,
    HttpClientModule,
    BreadcumModule,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
