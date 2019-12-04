import { ExternalGuard } from './core/guards/external.guard';
import { LoginComponent } from './authorization/login/login.component';
import { AuthLayoutComponent } from './authorization/auth-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: '', component: AuthLayoutComponent, children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  
  { path: '', loadChildren: './layout/layout.module#LayoutModule' },

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }

