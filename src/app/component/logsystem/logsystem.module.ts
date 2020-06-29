import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsystemComponent } from './logsystem.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { Routes, RouterModule } from '@angular/router';

const logsystem: Routes = [{ path: '', component: LogsystemComponent }];
@NgModule({
  declarations: [
    LogsystemComponent,
    SliderComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    RouterModule.forChild(logsystem),
    CommonModule,
    AngularMaterialModule,
  ],
})
export class LogsystemModule {}
