import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ExtendedHttpService extends Http {

    constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        // do whatever
        if (typeof url === 'string') {
            if (!options) {
                options = { headers: new Headers() };
            }
            this.setHeaders(options);
        } else {
            this.setHeaders(url);
        }

        return super.request(url, options).catch(this.catchErrors());
    }

    private catchErrors() {
        return (res: Response) => {
            if (res.status === 401 || res.status === 403) {
                // handle authorization errors
                // in this example I am navigating to logout route which brings the login screen
                this.router.navigateByUrl('login');
            } else if (res.status === 0 || res.status === 404 || res.status === 500) {
                res['_body'] = { errMsg: '服务错误' };
            }
            return Observable.throw(res.json());
        };
    }

    private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
        // add whatever header that you need to every request
        // in this example I add header token by using authService that I've created
        objectToSetHeadersTo.headers.set('Token', '123456');
    }
}
