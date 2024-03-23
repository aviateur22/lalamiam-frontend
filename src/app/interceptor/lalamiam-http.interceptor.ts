import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import frontEndUrl from '../utils/front-end-url';

@Injectable()
export class LalamiamHttpInterceptor implements HttpInterceptor {

  constructor(private _injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (error: HttpErrorResponse)=>{
          const errorStatus: number = error.status;
          const router = this._injector.get(Router);

          switch(errorStatus) {
            case 401: {
              console.log('erreur: 401: ', error.status);
              break;
            }
            case 403: {
              console.log('error 403: ', error.status);
              break;
            }
            case 404: {
              console.log('error 404: ', error.status);
              router.navigate([frontEndUrl.notFindUrl.url]);
             break;
          }
        }
        }
      })
    );
    // return next.handle(request).pipe(
    // //return next.handle(request).pipe(

    //   catchError((error: HttpErrorResponse)=>{
    //     const errorStatus: number = error.status;
    //     const router = this._injector.get(Router);
    //       switch(errorStatus) {
    //         case 401: {
    //           console.log('erreur: 401: ', error.status);
    //           return throwError(()=> error)
    //           break;
    //         }
    //         case 403: {
    //           console.log('error 403: ', error.status);
    //           return throwError(()=> error)
    //           break;
    //         }
    //         case 404: {
    //           console.log('error 404: ', error.status);
    //           router.navigate([frontEndUrl.notFindUrl.url]);
    //           return throwError(()=> error)
    //         break;
    //       }
    //         default:return throwError(()=> error)
    //       }

    //   })
    // );
  }
}
