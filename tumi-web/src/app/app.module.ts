import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CoursesComponent } from './courses/courses.component';
import { BadgesComponent } from './badges/badges.component';
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavComponent,
    TopBarComponent,
    CoursesComponent,
    BadgesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
