import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

export const pagesRoutes = [
    {
        path: 'login',
        loadChildren: 'pages/login/login.module#LoginModule'
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: 'pages/home/home.module#HomeModule' },
            { path: 'authority', loadChildren: 'pages/authority/authority.module#AuthorityModule' },
            { path: '**', redirectTo: 'home' }
        ]
    }
];
