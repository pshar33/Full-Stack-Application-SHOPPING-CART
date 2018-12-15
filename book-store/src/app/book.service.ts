import { Injectable } from '@angular/core';
import { Book } from './book';
//import { BOOKS } from './mock-books';
import { Observable, of } from 'rxjs';
//import { MessageService } from './message.service';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { HttpClient, Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
data:any;
bookList: AngularFireList<any>;
selectedBook: Book = new Book();
  constructor(private http: HttpClient) { }

  getBooks(){
    
 return this.http.get("http://localhost:8080/Items");
 
  });
  }
  /*
  insertBook(book: Book){
  this.http.post('http://localhost:8080/add',
  { name : book.name },
  { price : book.price },
  { quantity : book.quantity }).subscribe(
    res=> {
      console.log(res);
    },
    err=> {
      console.log('error occured');
    }

    );
    console.log( this.newBook + 'added to the database !!');

  }
  
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
  */
}
