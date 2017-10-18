import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { HomePersonalComponent } from './personal/personal.component';
import { HomeAdminComponent } from './admin/admin.component';
import { ExtendedHttpService } from '../../shared/services/extended-http.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(homeRoutes)
    ],
    exports: [],
    declarations: [
        HomeComponent,
        HomePersonalComponent,
        HomeAdminComponent
    ],
    providers: [
        { provide: Http, useClass: ExtendedHttpService }
    ],
})
export class HomeModule { }
