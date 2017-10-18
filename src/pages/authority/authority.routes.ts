import { RouterModule } from '@angular/router';
import { AuthorityComponent } from './authority.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminModifyPermissionsComponent } from './components/admin-modify-permissions/admin-modify-permissions.component';
import { RoleComponent } from './components/role/role.component';
import { RoleModifyPermissionsComponent } from './components/role-modify-permissions/role-modify-permissions.component';
import { DepartmentComponent } from './components/department/department.component';
import { AuthGuard } from '../auth-guard';

export const authorityRoutes = [
    {
        path: '',
        component: AuthorityComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'admin', component: AdminComponent },
            { path: 'admin/:id/permissions', component: AdminModifyPermissionsComponent },
            { path: 'role', component: RoleComponent },
            { path: 'role/:id/permissions', component: RoleModifyPermissionsComponent },
            { path: 'department', component: DepartmentComponent }
        ]
    }
];
