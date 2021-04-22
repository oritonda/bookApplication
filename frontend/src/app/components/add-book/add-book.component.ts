import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookApi:ApiServiceService) { }

  ngOnInit(): void {
  }
  addBook(tittle:string, author:string, description:string, image:string)
  {
    // creating an oject for book
    let book = {
      tittle: tittle,
      author: author,
      description: description,
      image: image,
    };
    
    //
    this.bookApi.addBook(book).subscribe()

  }

}
