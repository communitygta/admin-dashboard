import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './core/services/app.service';
import { AppInterceptor } from './core/interceptors/app.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

// #region APP_INITIALIZER
export const APPSERVICEFACTORY = (appService: AppService) => () =>
  appService.initApp();

const APP_INITIALIZERS = [
  AppService,
  {
    provide: APP_INITIALIZER,
    useFactory: APPSERVICEFACTORY,
    deps: [AppService],
    multi: true,
  },
];
// #endregion

// #region APP_INITIALIZER
const APP_INTERCEPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
];
// #endregion

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'md'
    }),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ...APP_INITIALIZERS,
    ...APP_INTERCEPTORS,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
