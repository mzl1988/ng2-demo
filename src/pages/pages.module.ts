import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PageHeaderModule, PageSidebarModule } from '../shared/components/';
import { AuthGuard } from './auth-guard';
import { pagesRoutes } from './pages.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PageHeaderModule,
        PageSidebarModule,
        RouterModule.forChild(pagesRoutes)
    ],
    exports: [
    ],
    declarations: [
        PagesComponent
    ],
    providers: [
        AuthGuard
    ],
})
export class PagesModule { }
