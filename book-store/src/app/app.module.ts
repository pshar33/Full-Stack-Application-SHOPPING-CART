import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
//import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { HttpClient } from '@angular/common/http';
import { HttpClient, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    LoginComponent,
    ManagerComponent,
    AuthenticatedUserComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent,
              ]
})
export class AppModule { }
