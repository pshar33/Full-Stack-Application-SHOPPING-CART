import { Component, OnInit } from '@angular/core';
import { BookService   } from '../book.service';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-manager',       
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
      
  constructor(private bookService: BookService) { }
            
  ngOnInit() {
  this.resetForm();
  }     

  onSubmit(bookForm : NgForm){       
          
  }          
       
  resetForm(bookForm? : NgForm){    
  if(bookForm != null){    
  bookForm.reset();           
  this. bookService.selectedBook = {   
    $key : null,
    name : '',          
    description : '',
    availability : 0,       
    quantity : 0,             
    price : 0        
          

  }
  }
  }
}
