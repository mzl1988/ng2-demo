import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import * as _ from 'lodash';
declare let $: any;

@Component({
    selector: 'app-sidebar-component',
    templateUrl: './page-sidebar.component.html',
    styleUrls: ['./page-sidebar.component.scss']
})
export class PageSidebarComponent implements OnInit, AfterViewInit {
    perfectScrollbarConfig: any = {
        suppressScrollX: true,
        suppressScrollY: false
    };

    menuList: Array<any> = [
        {
            name: '首页',
            icon: 'mdi mdi-home',
            route: '/pages/home'
        },
        {
            name: '权限管理',
            icon: 'mdi mdi-security',
            on: false,
            children: [
                {
                    name: '部门',
                    route: '/pages/authority/department'
                },
                {
                    name: '角色',
                    route: '/pages/authority/role'
                },
                {
                    name: '管理员',
                    route: '/pages/authority/admin'
                }
            ]

        }
    ];

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute
    ) {

    }

    onResize(event) {
        $('.page-sidebar').slimScroll({
            width: '220px',
            height: `${event.target.innerHeight - 60}px`
        });
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        $('.page-sidebar').slimScroll({
            width: '220px',
            height: `${window.innerHeight - 60}px`
        });
        $.sidebarMenu($('.sidebar-menu'));
        setTimeout(() => {
            this.selectedMenu();
        });
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
