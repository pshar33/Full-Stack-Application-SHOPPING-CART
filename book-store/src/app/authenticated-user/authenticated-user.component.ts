import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
//import { BOOKS } from '../mock-books';
import { BookService   } from '../book.service';
@Component({
  selector: 'app-authenticated-user',
  templateUrl: './authenticated-user.component.html',
  styleUrls: ['./authenticated-user.component.css']
})
export class AuthenticatedUserComponent implements OnInit {
books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
   this.bookService.getBooks()
     .subscribe(books => {this.books = books});
       
     
  
  }

}
