import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { PageHeaderComponent } from './page-header.component';
import { ExtendedHttpService } from '../../../shared/services/extended-http.service';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        PageHeaderComponent
    ],
    declarations: [
        PageHeaderComponent
    ],
    providers: [
        { provide: Http, useClass: ExtendedHttpService }
    ]
})
export class PageHeaderModule { }
