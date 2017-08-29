import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import * as _ from 'lodash';
declare let $: any;

@Component({
    selector: 'app-sidebar-component',
    templateUrl: './page-sidebar.component.html',
    styleUrls: ['./page-sidebar.component.scss']
})
export class PageSidebarComponent implements OnInit {
    perfectScrollbarConfig: any = {
        suppressScrollX: true,
        suppressScrollY: false
    };

    menuList: Array<any> = [
        {
            name: '仪表板',
            icon: 'fa fa-dashboard',
            route: '/pages/profile'
        },
        {
            name: '物流',
            icon: 'fa fa-dashboard',
            on: false,
            children: [
                {
                    name: '运费模版',
                    route: '/pages/profile'
                }
            ]
        }
    ];

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        $.sidebarMenu($('.sidebar-menu'));
        this.selectedMenu();
    }

    selectedMenu() {
        let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;
        let routerUrl = routerStateSnapshot.url;
        let menuLevel = routerUrl.match(new RegExp('/', 'g')).length;
        if (menuLevel < 3) { return; }

        this.menuList.forEach(menu => {
            if (menu.children) {
                let no = _.find(menu.children, { route: routerUrl });
                if (no) {
                    menu.on = true;
                }
            }
        });
    }

    clickLink(name) {
        this.menuList.forEach(menu => {
            if (menu.children) {
                if (menu.name !== name) {
                    menu.on = false;
                }
            }
        });
    }

}
