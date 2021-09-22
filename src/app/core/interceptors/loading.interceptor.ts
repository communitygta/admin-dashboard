import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, forkJoin, from, of, zip, concat } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { finalize, map } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  public loadingInstances = [];
  constructor(private loadingController: LoadingController) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers.has('ignoreLoading')) {
      return next.handle(
        request.clone({ headers: request.headers.delete('ignoreLoading') })
      );
    }

    const id = (Math.random() + 1).toString(36).substr(2, 5);
    const $r = next.handle(request);
    const $loading = from(
      this.loadingController
        .create({ id, cssClass: 'request-loading', backdropDismiss: true })
        .then((ref) => {
          if (ref) {
            this.loadingInstances.push(ref);
            ref.present();
          }
        })
    );

    return forkJoin([$r, $loading]).pipe(
      map(([event, _]) => event),
      finalize(() => {
        while (this.loadingInstances.length > 0) {
          this.loadingInstances.pop().dismiss();
        }
      })
    );
  }
}
