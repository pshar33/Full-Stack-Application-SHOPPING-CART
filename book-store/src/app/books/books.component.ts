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
   /*var a=  this.bookService.getBooks()
   .snapshotChanges().subscribe(
     product=>{
       this.books=[];
       product.forEach(x => {
         var y= x.payload.toJSON();
         y["$key"] = x.key;
         this.books.push(y as Book);
     */
    
     this.bookService.getBooks()
     .subscribe(books => {this.books = books});
       
     
   

  }

  selectedBook: Book;
onSelect(book: Book): void {
  this.selectedBook = book;
}

//getBooks(): void {
 //this.bookService.getBooks()
   //  .subscribe(books => this.books = books);  }

}
