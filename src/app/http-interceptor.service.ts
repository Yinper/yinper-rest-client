import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
    private message: string;
    private error: string;
    private started: number;

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const interceptionOperator = tap<HttpEvent<any>>(
            this.interceptResponse.bind(this),
            this.catchError.bind(this)
        );
        const handledRequest = next.handle(req);
        this.started = Date.now();

        return handledRequest.pipe(interceptionOperator);
    }

    private interceptResponse = (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            const elapsed = Date.now() - this.started;
            console.log(
                `Request for ${JSON.stringify(event.body)} took ${elapsed} ms.`
            );
        }
    }

    private catchError(reason) {
        if (reason instanceof HttpErrorResponse) {
            this.message = `Http Error: ${reason.status}, text: ${
                reason.statusText
            }`;
        } else {
            this.message = `Unknown error, text: ${reason.message}`;
        }
        this.error = reason;
    }
}
