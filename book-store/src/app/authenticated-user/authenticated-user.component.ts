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
selectedprod :Array<{description: String ,price:String,quantity: String,availability: String}>=[];
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
if(book.availability>0 && book.quantity<book.availability){
this.selectedprod.push({description:book.description, price:book.price,quantity:book.quantity,availability:book.availability});
book.availability=book.availability-book.quantity;
}
else{
  console.log("qty inadequate");
}
}


//functionality to add quantity of books in the cart for the user.
    
    increaseCartItemQuantity(book: selectedprod){

    //stock level updation, with every increment in quantity availability is decremented

    if(book.quantity<book.availability && book.quantity>0 && book.availability>0){                  
    book.quantity = parseInt(book.quantity) + 1;
    book.availability=book.availability-1;
        }
else{
  console.log("qty inadequate");
}
        
    }

    removeCartItem(book:selectedprod){
    this.selectedprod.splice(book,1);

    }
//functionality to decrement quantity of books in the cart for the user.

    decreaseCartItemQuantity(book: selectedprod) {

    //stock level updation, with every increment in quantity availability is decremented

    if(book.availability>0 && book.quantity<book.availability && book.quantity>0 && book.availability>0){
    book.quantity = book.quantity - 1;
    book.availability=parseInt(book.availability)+1;
        }
        else{
  console.log("qty inadequate");
}
        
    }

    BuyCart(){
   this.selectedprod=[];
}
