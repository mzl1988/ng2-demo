import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

export const pagesRoutes = [
    // {
    //     path: 'login',
    //     loadChildren: 'pages/login/login.module#LoginModule'
    // },
    // {
    //     path: 'register',
    //     loadChildren: 'app/pages/register/register.module#RegisterModule'
    // },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', loadChildren: 'pages/profile/profile.module#ProfileModule' },
            { path: '**', redirectTo: 'profile' }
        ]
    }
];
