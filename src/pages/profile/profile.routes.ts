import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AuthGuard } from '../auth-guard';

export const profileRoutes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: ProfileComponent
    }
];
