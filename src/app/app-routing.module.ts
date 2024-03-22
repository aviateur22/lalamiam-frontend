//@ts-nocheck
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import pageTitle from './utils/page-title';
import { environment } from 'src/environments/environment';
import frontEndUrl from './utils/front-end-url';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';

const routes: Routes = [
  { path: frontEndUrl.forbiddenUrl.url, component: ForbiddenComponent, title: pageTitle.forbiddenPageTitle[environment.language]},
  { path: "", redirectTo: frontEndUrl.home, pathMatch: "full"},
  { path: "**", component: NotFoundComponent, title: pageTitle.notFoundPageTitle[environment.language]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
