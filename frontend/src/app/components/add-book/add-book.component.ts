import { Router } from '@angular/router';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookApi:ApiServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  addBook(tittle:string, author:string, description:string, image:string)
  {
    // creating an oject for book
    let book = {
      tittle: tittle.trim(),
      author: author.trim(),
      description: description.trim(),
      image: image.trim(),
    };

    if (tittle.trim()=='' || author.trim()=='' || description.trim()=='' || image.trim()=='')
    {

    }
    else
    {
      this.bookApi.addBook(book).subscribe()
      this.router.navigate(["/view/books"])
    }
    //
    

  }

}
