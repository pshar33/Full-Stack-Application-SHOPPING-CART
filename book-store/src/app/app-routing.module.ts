import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent }      from './books/books.component';
import { BookDetailComponent }      from './book-detail/book-detail.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes=[
{ path : '', redirectTo: '/books', pathMatch: 'full'},
{ path : 'books', component: BooksComponent },
{ path : 'book-detail', component: BookDetailComponent },
{ path : 'login', component: LoginComponent }


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
