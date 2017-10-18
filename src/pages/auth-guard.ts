import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
declare let store: any;

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // return true;
        // 这里可以调用真实的服务进行验证
        if (store.get('token')) {
            return true;
        } else {
            this.router.navigateByUrl('login');
            return false;
        }
    }
}
