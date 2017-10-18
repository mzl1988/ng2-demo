import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { authorityRoutes } from './authority.routes';
import { AuthorityComponent } from './authority.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminModifyPermissionsComponent } from './components/admin-modify-permissions/admin-modify-permissions.component';
import { RoleModifyPermissionsComponent } from './components/role-modify-permissions/role-modify-permissions.component';
import { RoleComponent } from './components/role/role.component';
import { DepartmentComponent } from './components/department/department.component';
import { ExtendedHttpService } from '../../shared/services/extended-http.service';
import { MyPaginationModule } from '../../shared/components/';

import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MyPaginationModule,
        ModalModule.forRoot(),
        RouterModule.forChild(authorityRoutes)
    ],
    exports: [],
    declarations: [
        AuthorityComponent,
        AdminComponent,
        AdminModifyPermissionsComponent,
        RoleComponent,
        RoleModifyPermissionsComponent,
        DepartmentComponent
    ],
    providers: [
        { provide: Http, useClass: ExtendedHttpService }
    ],
})
export class AuthorityModule { }
