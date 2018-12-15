import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent }      from './books/books.component';
import { BookDetailComponent }      from './book-detail/book-detail.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { OneproductComponent } from './oneproduct/oneproduct.component';

const routes : Routes=[
{ path : '', redirectTo: '/books', pathMatch: 'full'},
{ path : 'books', component: BooksComponent },
{ path : 'book-detail', component: BookDetailComponent },
{ path : 'login', component: LoginComponent },
{ path : 'authenticated-user', component: AuthenticatedUserComponent },
{ path : 'manager', component: ManagerComponent }
{ path : 'oneproduct', component: OneproductComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
