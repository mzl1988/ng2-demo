import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let store: any;

@Component({
    selector: 'app-header-component',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

    constructor(
        public router: Router,
    ) {
    }

    ngOnInit() {
    }

    userManual() {
        this.router.navigateByUrl('/pages/user-manual');
    }

    logout() {
        store.remove('token');
        this.router.navigateByUrl('/login');
    }

}
