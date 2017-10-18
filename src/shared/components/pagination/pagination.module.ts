import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule.forRoot(),
    ],
    exports: [
        PaginationComponent
    ],
    declarations: [
        PaginationComponent
    ],
    providers: []
})
export class MyPaginationModule { }
