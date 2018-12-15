import { Component, OnInit } from '@angular/core';
import { BookService   } from '../book.service';

@Component({
  selector: 'app-manager',       
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
      
  constructor(private bookService: BookService) { }
            
  ngOnInit() {

  }     

  onSubmit(){       
          
  }          
       

}
