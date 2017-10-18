import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let store: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: []
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: [
                'username',
                [Validators.required, Validators.minLength(1)]
            ],
            password: [
                '123456',
                [Validators.required, Validators.minLength(1)]
            ]
        });
    }

    doLogin(form, valid) {
        // console.log(form);
        // console.log(valid);
        store.set('token', '123456');
        this.router.navigateByUrl('/pages/profile');
    }

}
