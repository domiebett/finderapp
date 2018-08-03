import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ItemsModule } from './modules/items/items.module';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ApiRouteInterceptor } from './_services/interceptors/api-route.interceptor';

import { AppComponent } from './app.component';
import {ErrorsHandler} from './_services/handlers/errors.handler';
import { ToastComponent } from './_directives/alert/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ItemsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiRouteInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
