import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
//import { BOOKS } from '../mock-books';
import { BookService   } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  
})
export class BooksComponent implements OnInit {
books: Book[];



  constructor(private bookService: BookService) { }

  ngOnInit() {
   
     this.bookService.getBooks()
     .subscribe(books => {this.books = books});
       
     
   

  }


  /* user can select any book with this onSelect
  functionality shown below to view details of that book
  */

  selectedBook: Book;
onSelect(book: Book): void {
  this.selectedBook = book;
}




//getBooks(): void {
 //this.bookService.getBooks()
   //  .subscribe(books => this.books = books);  }

}
