import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditFormComponent } from './components/credit-form/credit-form.component';
import { CreditTableComponent } from './components/credit-table/credit-table.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeGuard } from './guards/home.guard';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreditFormComponent,
    CreditTableComponent,
    HomeComponent
],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, canActivate: [HomeGuard]}
    ])
  ]
})
export class HomeModule { }
