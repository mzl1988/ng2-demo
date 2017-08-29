import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { profileRoutes } from './profile.routes';
import { ProfileComponent } from './profile.component';
import { ExtendedHttpService } from '../../shared/services/extended-http.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(profileRoutes)
    ],
    exports: [],
    declarations: [
        ProfileComponent
    ],
    providers: [
        { provide: Http, useClass: ExtendedHttpService }
    ],
})
export class ProfileModule { }
