import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-oneproduct',
  templateUrl: './oneproduct.component.html',
  styleUrls: ['./oneproduct.component.css']
})
export class OneproductComponent implements OnInit {
@Input() book: Book;
books: Book[];

  constructor() { }

  ngOnInit() {
  }

}
