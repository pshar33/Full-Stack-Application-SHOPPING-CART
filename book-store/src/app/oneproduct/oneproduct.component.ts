import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService   } from '../book.service';
import { User } from './src/app/users';
import { HttpClient } from '@angular/common/http';
import { HttpClient, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-oneproduct',
  templateUrl: './oneproduct.component.html',
  styleUrls: ['./oneproduct.component.css']
})
export class OneproductComponent implements OnInit {
@Input() book: Book;
books: Book[];
users: User[];
name:String;
rating:String;
review:String;

  constructor(private bookService: BookService,,private http: HttpClient) { }

  ngOnInit() {
  this.bookService.getrev()
     .subscribe(users => {this.users = users});


  }

  addreview(name,rating,review){
  console.log(this.review);
   console.log(this.name);
    console.log(this.rating);
 this.http.post("http://localhost:8080/addreview",
  { name : this.name ,
   rating : this.rating ,
   review : this.review }).subscribe(
    res=> {
      console.log(res);
    }
    );
    //console.log( this.newBook + 'added to the database !!');

  }

  


}
