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
selectedprod :Array<{description: String ,price:String,quantity: String}>=[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
   this.bookService.getBooks()
     .subscribe(books => {this.books = books});
       
    
  
  }
   selectedBook: Book;
onSelect(book: Book): void {
  this.selectedBook = book;
}

addBook(book){
this.selectedprod.push({description:book.description, price:book.price,quantity:book.quantity});
}


removeCartItem(book: selectedprod) {
        
    }
    
    increaseCartItemQuantity(book: selectedprod){
        book.quantity = parseInt(book.quantity) + 1;
        

        
    }

    decreaseCartItemQuantity(book: selectedprod) {
        book.quantity = book.quantity - 1;
        

        
    }

    BuyCart(book: selectedprod){
    while(book.length>0){
      book=this.book.splice(0,1);
    }
    console.log("Buying Successful !!");
    }
}
