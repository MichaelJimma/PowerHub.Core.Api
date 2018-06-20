import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '**', component: NotFoundComponent },
];
  
export const AppRouting = RouterModule.forRoot(appRoutes, { 
    useHash: true
});