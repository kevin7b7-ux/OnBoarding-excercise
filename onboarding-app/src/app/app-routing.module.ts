import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './auth/components/form/form.component';

const routes: Routes = [
  { path:"", component: FormComponent },

  { 
    path: "home",
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
