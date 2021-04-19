import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { ColorChangeComponent } from './front-end-projects/color-change/color-change.component';
import { CounterComponent } from './front-end-projects/counter/counter/counter.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent},
  {path: 'home', component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    ColorChangeComponent,
    CounterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
