import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { ItemsModule } from './modules/items/items.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { NavigationModule } from './modules/navigation/navigation.module'

import { AppComponent } from './app.component';
import { ToastComponent } from './_directives/alert/toast.component';

import { AuthGuard } from './_services/guards/auth.guard';

import {ErrorsHandler} from './_services/handlers/errors.handler';
import { ApiRouteInterceptor } from './_services/interceptors/api-route.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ItemsModule,
    NavigationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
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
