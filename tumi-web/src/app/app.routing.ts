import { Routes, RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";
import { CoursesComponent } from "./courses/courses.component";
import { BadgesComponent } from "./badges/badges.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo:'/profile', pathMatch: 'full'},
    { path: 'profile', component: ProfileComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'badges', component: BadgesComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
