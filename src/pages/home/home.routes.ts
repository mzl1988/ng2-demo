import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth-guard';

export const homeRoutes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: HomeComponent
    }
];
