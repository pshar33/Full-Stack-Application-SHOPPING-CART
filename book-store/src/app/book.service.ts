import { Injectable } from '@angular/core';
import { Book } from './book';
//import { BOOKS } from './mock-books';
import { Observable, of } from 'rxjs';
//import { MessageService } from './message.service';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class BookService {
bookList AngularFireList<any>;
selectedBook: Book = new Book();
  constructor(private db : AngularFireDatabase) { }

  getBooks(){
    
  this.bookList = this.db.list('book-details');
  return this.bookList;
  }

  insertBook(book: Book){
  this.bookList.push({
 availability: book.availability,
 comments: book.comments,
 description: book.description,
 image: book.image,
 name: book.name,
 quantity: book.quantity,
 rating: book.rating
 
    });
  }

  updateBook(book: Book){
    this.bookList.update(book.$key,{
 availability: book.availability,
 comments: book.comments,
 description: book.description,
 image: book.image,
 name: book.name,
 quantity: book.quantity,
 rating: book.rating
    });
  }

  deleteBook($key : string){
  this.bookList.remove($key);
  }
}
