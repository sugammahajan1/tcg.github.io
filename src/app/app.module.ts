/******************** imports ********************/
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';

/******************** Declarations ********************/
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AuthLayoutComponent } from './authorization/auth-layout.component';
import { LoginComponent } from './authorization/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoaderComponent } from './core/loader/loader.component';

/******************** Providers ********************/
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { AuthGuard } from './core/guards/auth.guard';
import { ExternalGuard } from './core/guards/external.guard';
import { CookieService } from 'ngx-cookie-service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DescriptionModalComponent } from './shared/modal-window/description-modal/description-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    LoginComponent,
    PageNotFoundComponent,
    LoaderComponent,
    DescriptionModalComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  entryComponents: [DescriptionModalComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    AuthGuard,
    ExternalGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
