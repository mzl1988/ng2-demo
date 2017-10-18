import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routes';
import { ExtendedHttpService } from '../../shared/services/extended-http.service';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TabsModule.forRoot(),
        RouterModule.forChild(loginRoutes)
    ],
    exports: [],
    declarations: [
        LoginComponent
    ],
    providers: [
        { provide: Http, useClass: ExtendedHttpService }
    ]
})
export class LoginModule { }
