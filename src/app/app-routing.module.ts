import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';


const routes: Routes = [
  {path: 'crisis-center', component: CrisisListComponent},
  {path: 'hero/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroListComponent},
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
