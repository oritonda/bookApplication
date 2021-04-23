import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  // variable to contain all the books
  books:any=[]

  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
    // calling the get books method 
    this.getBooks()
  }
  // function to get books from the api
  getBooks()
  {
    // subscribing to the book service
    this.api.getBooks().subscribe(books=>{
      this.books = books

    })
  }

  // fuction to delete a book
  deleteBook(id:string)
  {
    // subscribing to service
    this.api.deleteBook(id).subscribe()
    // get books
    this.getBooks();
  }

}
