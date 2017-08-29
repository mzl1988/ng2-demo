import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { PageSidebarComponent } from './page-sidebar.component';
import { ExtendedHttpService } from '../../../shared/services/extended-http.service';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        PageSidebarComponent
    ],
    declarations: [
        PageSidebarComponent
    ],
    providers: [
        { provide: Http, useClass: ExtendedHttpService }
    ]
})
export class PageSidebarModule { }
