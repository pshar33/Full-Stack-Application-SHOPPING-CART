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
  
  }
  
  getrev(){
    
 return this.http.get("http://localhost:8080/getreview");
  
  }
  
  
  }

    

}
