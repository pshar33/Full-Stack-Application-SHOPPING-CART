import { Component, OnInit } from '@angular/core';
import { BookService   } from '../book.service';
import { HttpClient } from '@angular/common/http';

import { Book } from '../book';
import { HttpClient, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-manager',       
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
     username: String;
password: String;
description: String;
price: String;
quantity: String;

  constructor(private bookService: BookService,private http: HttpClient) { }
            
  ngOnInit() {
  //calling bookService to get the books from the database
  this.bookService.getBooks()
     .subscribe(books =>
     //console.log(books);
     {this.books = books}
     );
  }     


  //function to add a new book to the database for the manager
  addbook(){
  //console.log(this.description);
 this.http.post("http://localhost:8080/add",
  { description : this.description ,
   price : this.price ,
   quantity : this.quantity }).subscribe(
    res=> {
      console.log(res);
    }
    );
    //console.log( this.newBook + 'added to the database !!');

  }

  //function to update the books quantity and price for the manager
  updatebookDetails(book:Book){
  //console.log(book._id,book.price);
  this.http.put("http://localhost:8080/update" ,
  { _id : book._id,
  description : book.description ,
   price : book.price ,
   quantity : book.quantity
  }).subscribe(
    response=> {
    console.log(response);
    }
  );
  
  }

  //function to delete any book from the database for the manager
  deletebook(book:Book){
  console.log(book.description);
  this.http.post("http://localhost:8080/delete" ,
  { _id : book._id,
    description : book.description ,
   price : book.price ,
   quantity : book.quantity

  }).subscribe(
    response=> {
    console.log(response);
    }
  );
  


  }
  
}
