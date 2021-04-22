import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  

  constructor(private api:ApiServiceService, private router:ActivatedRoute) { }
    // initializing book id
  bookId:string = `${this.router.snapshot.paramMap.get('id')}`
  // array to contain book details
  book:any=[]
  // function to run first when component starts
  ngOnInit(): void {
     // calling the get book method as soon as the component starts
    this.getBook()

  }
  getBook(){
    this.api.getBook(this.bookId).subscribe(book=>{
      this.book = book
    })

  }
  updateBook(tittle:string, author:string, description:string, image:string)
  {

    let book = {
      tittle: tittle,
      author: author,
      description: description,
      image: image,
    };

    this.api.updateBook(this.bookId,book).subscribe()

  }

}
