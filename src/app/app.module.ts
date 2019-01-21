import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { ItemsModule } from './modules/items/items.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { ModalsModule } from './modules/modals/modals.module';

import { AppComponent } from './app.component';
import { ToastComponent } from './_directives/alert/toast.component';

import { AuthGuard } from './services/guards/auth.guard';

import { AuthEmitter } from './services/emitters/auth.emitter';

import {ErrorsHandler} from './services/handlers/errors.handler';
import { ApiRouteInterceptor } from './services/interceptors/api-route.interceptor';


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
    ModalsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthEmitter,
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
